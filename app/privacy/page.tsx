import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — John Gulliver",
  description: "Privacy policy for John Gulliver's portfolio and TikTok automation app (Everything_Else).",
  alternates: { canonical: "/privacy" },
};

export default function Privacy() {
  return (
    <main className="section-shell" style={{ maxWidth: 860 }}>
      <p className="section-label">Privacy Policy</p>
      <h1 style={{ fontSize: "clamp(36px,5vw,64px)", lineHeight: 1, letterSpacing: "-0.04em", textTransform: "uppercase" }}>
        Privacy Policy
      </h1>
      <p style={{ color: "#aaa69e", lineHeight: 1.7 }}>Last updated: September 2026</p>
      <div style={{ display: "grid", gap: 20, lineHeight: 1.7, color: "#c9c4ba" }}>
        <section>
          <h2>1. Data collected</h2>
          <p>
            This site is a static portfolio — no accounts, no tracking cookies, no analytics.
            The &ldquo;Everything_Else&rdquo; TikTok uploader runs locally and stores TikTok OAuth
            tokens only on my own machine (~/.hermes/tiktok_token.json). No personal data of
            visitors is collected or shared.
          </p>
        </section>
        <section>
          <h2>2. TikTok API data</h2>
          <p>
            When I authorize the app, TikTok provides an access token, open_id, and creator info
            (username, privacy options) solely to upload my own videos via the Content Posting API
            (scopes: video.upload, video.publish). Tokens are never shared, sold, or sent to third
            parties. Videos uploaded are my own original educational shorts.
          </p>
        </section>
        <section>
          <h2>3. Data retention &amp; deletion</h2>
          <p>
            Local tokens can be revoked anytime via TikTok Settings → Security → Authorized apps,
            and deleted locally by removing ~/.hermes/tiktok_token.json. To request deletion of any
            data, email johnlipata112904@gmail.com.
          </p>
        </section>
        <section>
          <h2>4. Contact</h2>
          <p>John Gulliver — johnlipata112904@gmail.com</p>
        </section>
        <p><a href="/" style={{ textDecoration: "underline" }}>← Back to portfolio</a></p>
      </div>
    </main>
  );
}
