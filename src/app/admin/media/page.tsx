"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import galleryTiles from "@/data/gallery.json";
import { blogPosts } from "@/data/blog";

type UploadStatus = { message: string; ok: boolean } | null;

function UploadRow({
  label,
  target,
  itemKey,
}: {
  label: string;
  target: "gallery" | "blog" | "site";
  itemKey: string;
}) {
  const [status, setStatus] = useState<UploadStatus>(null);
  const [busy, setBusy] = useState(false);

  async function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setBusy(true);
    setStatus(null);

    const form = new FormData();
    form.append("file", file);
    form.append("target", target);
    form.append("key", itemKey);

    try {
      const res = await fetch("/api/upload", { method: "POST", body: form });
      const data = await res.json();
      if (data.success) {
        setStatus({ message: `Saved as ${data.path}`, ok: true });
      } else {
        setStatus({ message: data.message || "Upload failed.", ok: false });
      }
    } catch {
      setStatus({ message: "Upload failed. Is the dev server running?", ok: false });
    } finally {
      setBusy(false);
      e.target.value = "";
    }
  }

  return (
    <div className="flex items-center justify-between gap-4 py-3 border-b border-sail-light">
      <div>
        <p className="text-sm font-medium text-harbor">{label}</p>
        {status && (
          <p className={`text-xs mt-0.5 ${status.ok ? "text-green-600" : "text-red-600"}`}>
            {status.message}
          </p>
        )}
      </div>
      <label className="btn-dark text-xs cursor-pointer shrink-0">
        {busy ? "Uploading..." : "Choose photo"}
        <input type="file" accept="image/*" className="hidden" onChange={handleFile} disabled={busy} />
      </label>
    </div>
  );
}

export default function MediaAdminPage() {
  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/admin-logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  }

  return (
    <section className="section-pad bg-white pt-16 min-h-screen">
      <div className="container-page max-w-2xl">
        <div className="flex items-start justify-between gap-4">
          <h1 className="font-display text-3xl text-harbor mb-2">Media Manager</h1>
          <button onClick={handleLogout} className="text-xs font-mono text-ink/50 hover:text-signal transition-colors shrink-0 mt-2">
            Log out
          </button>
        </div>
        <p className="text-sm text-ink/60 mb-2">
          Upload photos for the gallery and blog covers. This only works
          while the site is running locally (<code>npm run dev</code>) — it
          saves files directly into your project folder.
        </p>
        <p className="text-sm text-ink/60 mb-10">
          After uploading, commit and push your project (including the new
          files in <code>public/images/</code> and the updated files in{" "}
          <code>src/data/</code>) so the images show up on your live site too.
        </p>

        <h2 className="font-display text-xl text-harbor mb-2 mt-10">Homepage &amp; legacy photos</h2>
        <div>
          <UploadRow label="Homepage — Who We Are photo" target="site" itemKey="home-who-we-are" />
          <UploadRow label="Legacy — Grandfather (1971)" target="site" itemKey="legacy-grandfather" />
          <UploadRow label="Legacy — Father (1978)" target="site" itemKey="legacy-father" />
          <UploadRow label="Legacy — Khalil-ur-Rehman (2000)" target="site" itemKey="legacy-owner" />
        </div>

        <h2 className="font-display text-xl text-harbor mb-2 mt-12">Gallery photos</h2>
        <div>
          {(galleryTiles as { label: string }[]).map((tile) => (
            <UploadRow key={tile.label} label={tile.label} target="gallery" itemKey={tile.label} />
          ))}
        </div>

        <h2 className="font-display text-xl text-harbor mb-2 mt-12">Blog cover photos</h2>
        <div>
          {blogPosts.map((post) => (
            <UploadRow key={post.slug} label={post.title} target="blog" itemKey={post.slug} />
          ))}
        </div>
      </div>
    </section>
  );
}
