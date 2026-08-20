import { NextResponse } from "next/server";
import { writeFile, readFile } from "fs/promises";
import path from "path";

const ROOT = process.cwd();

function safeFilename(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9.-]/g, "-").replace(/-+/g, "-");
}

function isAuthorized(request: Request) {
  const correct = process.env.ADMIN_PASSWORD?.trim();
  if (!correct) return false;
  const cookieHeader = request.headers.get("cookie") || "";
  const match = cookieHeader.match(/admin_auth=([^;]+)/);
  if (!match) return false;
  return decodeURIComponent(match[1]) === correct;
}

export async function POST(request: Request) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ success: false, message: "Not authorized." }, { status: 401 });
  }

  try {
    const formData = await request.formData();
    const file = formData.get("file") as File | null;
    const target = formData.get("target") as string | null; // "gallery" or "blog"
    const key = formData.get("key") as string | null; // gallery label, or blog slug

    if (!file || !target || !key) {
      return NextResponse.json({ success: false, message: "Missing file, target, or key." }, { status: 400 });
    }
    if (target !== "gallery" && target !== "blog" && target !== "site") {
      return NextResponse.json({ success: false, message: "Invalid target." }, { status: 400 });
    }

    const ext = path.extname(file.name) || ".jpg";
    const filename = `${safeFilename(key)}${ext}`;
    const relativePath = `/images/${target}/${filename}`;
    const diskPath = path.join(ROOT, "public", "images", target, filename);

    const buffer = Buffer.from(await file.arrayBuffer());
    await writeFile(diskPath, buffer);

    if (target === "gallery") {
      const dataPath = path.join(ROOT, "src", "data", "gallery.json");
      const raw = await readFile(dataPath, "utf-8");
      const tiles: { label: string; image?: string }[] = JSON.parse(raw);
      const existing = tiles.find((t) => t.label === key);
      if (existing) {
        existing.image = relativePath;
      } else {
        tiles.push({ label: key, image: relativePath });
      }
      await writeFile(dataPath, JSON.stringify(tiles, null, 2) + "\n");
    } else if (target === "blog") {
      const dataPath = path.join(ROOT, "src", "data", "blog-images.json");
      const raw = await readFile(dataPath, "utf-8");
      const map: Record<string, string> = JSON.parse(raw);
      map[key] = relativePath;
      await writeFile(dataPath, JSON.stringify(map, null, 2) + "\n");
    } else {
      const dataPath = path.join(ROOT, "src", "data", "site-images.json");
      const raw = await readFile(dataPath, "utf-8");
      const map: Record<string, string> = JSON.parse(raw);
      map[key] = relativePath;
      await writeFile(dataPath, JSON.stringify(map, null, 2) + "\n");
    }

    return NextResponse.json({ success: true, path: relativePath });
  } catch (err) {
    return NextResponse.json(
      { success: false, message: err instanceof Error ? err.message : "Upload failed." },
      { status: 500 }
    );
  }
}
