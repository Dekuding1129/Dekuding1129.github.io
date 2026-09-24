import type { Metadata } from "next";
import { Suspense } from "react";
import CallbackClient from "./client";

export const metadata: Metadata = {
  title: "TikTok OAuth Callback — Everything_Else",
  description: "OAuth callback helper for Everything_Else TikTok app. Copies the authorization code locally, no tokens stored.",
  alternates: { canonical: "/callback" },
};

export default function CallbackPage() {
  return (
    <Suspense fallback={<main className="section-shell"><p>Loading…</p></main>}>
      <CallbackClient />
    </Suspense>
  );
}
