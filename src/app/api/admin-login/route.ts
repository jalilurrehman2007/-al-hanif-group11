import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { password } = await request.json();
  const correct = process.env.ADMIN_PASSWORD?.trim();

  if (!correct) {
    return NextResponse.json(
      { success: false, message: "ADMIN_PASSWORD is not set on the server yet." },
      { status: 500 }
    );
  }

  if (String(password).trim() !== correct) {
    return NextResponse.json({ success: false, message: "Incorrect password." }, { status: 401 });
  }

  const res = NextResponse.json({ success: true });
  res.cookies.set("admin_auth", correct, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });
  return res;
}
