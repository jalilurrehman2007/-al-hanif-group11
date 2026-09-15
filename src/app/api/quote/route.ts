import { NextResponse } from "next/server";

// This runs on the server only — the access key below never reaches the
// browser. Set WEB3FORMS_ACCESS_KEY in your environment (.env.local for
// local dev, Netlify's Environment Variables for production). Note this is
// a plain server variable, NOT prefixed with NEXT_PUBLIC_ — that prefix is
// what would leak it into client-side JavaScript.
const ACCESS_KEY = process.env.WEB3FORMS_ACCESS_KEY;

export async function POST(request: Request) {
  if (!ACCESS_KEY) {
    console.error("[/api/quote] WEB3FORMS_ACCESS_KEY is not set in the environment.");
    return NextResponse.json(
      { success: false, message: "Form is not configured yet. Set WEB3FORMS_ACCESS_KEY on the server." },
      { status: 500 }
    );
  }

  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "Missing required fields." },
        { status: 400 }
      );
    }

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: ACCESS_KEY,
        subject: "New quote request — website enquiry",
        from_name: "Website Quote Form",
        name,
        email,
        phone,
        service,
        message,
      }),
    });

    const text = await res.text();
    let data;
    try {
      data = JSON.parse(text);
    } catch {
      console.error("[/api/quote] Web3Forms did not return JSON. Raw response:", text.slice(0, 500));
      return NextResponse.json(
        { success: false, message: "Unexpected response from the email service." },
        { status: 502 }
      );
    }

    if (!data.success) {
      console.error("[/api/quote] Web3Forms rejected the submission:", data);
      return NextResponse.json(
        { success: false, message: data.message || "Submission failed. Please try again." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[/api/quote] Unexpected error:", err);
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}