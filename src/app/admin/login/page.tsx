"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError("");

    try {
      const res = await fetch("/api/admin-login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = await res.json();
      if (data.success) {
        router.push("/admin/media");
        router.refresh();
      } else {
        setError(data.message || "Incorrect password.");
      }
    } catch {
      setError("Something went wrong. Try again.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-manifest px-4">
      <form onSubmit={handleSubmit} className="bg-white border border-sail-light rounded-sm p-8 w-full max-w-sm">
        <h1 className="font-display text-2xl text-harbor mb-1">Admin Access</h1>
        <p className="text-sm text-ink/60 mb-6">Enter the password to manage site media.</p>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          autoFocus
          className="w-full rounded-sm bg-white border border-sail/40 text-ink px-4 py-3 text-sm focus:border-route outline-none transition-colors mb-4"
        />
        {error && <p className="text-signal text-sm mb-4">{error}</p>}
        <button type="submit" disabled={busy} className="btn-primary w-full justify-center">
          {busy ? "Checking..." : "Log In"}
        </button>
      </form>
    </section>
  );
}
