import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — John Gulliver",
  description: "Terms of service for John Gulliver's portfolio and TikTok automation app (Everything_Else).",
  alternates: { canonical: "/terms" },
};

export default function Terms() {
  return (
    <main className="section-shell" style={{ maxWidth: 860 }}>
      <p className="section-label">Terms of Service</p>
      <h1 style={{ fontSize: "clamp(36px,5vw,64px)", lineHeight: 1, letterSpacing: "-0.04em", textTransform: "uppercase" }}>
        Terms of Service
      </h1>
      <p style={{ color: "#aaa69e", lineHeight: 1.7 }}>Last updated: September 2026</p>
      <div style={{ display: "grid", gap: 20, lineHeight: 1.7, color: "#c9c4ba" }}>
        <section>
          <h2>1. What this app does</h2>
          <p>
            &ldquo;Everything_Else&rdquo; is a personal uploader that posts AI-generated educational
            shorts (1080x1920 MP4, created locally with Remotion + Edge TTS from my own scripts)
            to my own TikTok account via TikTok&apos;s official Content Posting API (Direct Post,
            FILE_UPLOAD). The portfolio site at dekuding1129.github.io showcases the work.
          </p>
        </section>
        <section>
          <h2>2. Acceptable use</h2>
          <p>
            Content is my own original educational material. I do not post spam, misleading
            content, or third-party copyrighted material. AI-generated videos are labeled
            (is_aigc) per TikTok requirements.
          </p>
        </section>
        <section>
          <h2>3. TikTok platform compliance</h2>
          <p>
            Use of TikTok APIs complies with TikTok&apos;s Terms of Service, Community Guidelines,
            and developer policies. Posting requires my explicit consent per video (title, hashtags,
            privacy level reviewed before upload). Unaudited testing uses SELF_ONLY privacy.
          </p>
        </section>
        <section>
          <h2>4. No warranties</h2>
          <p>This personal tool is provided as-is, without warranty. Contact: johnlipata112904@gmail.com</p>
        </section>
        <p><a href="/" style={{ textDecoration: "underline" }}>← Back to portfolio</a></p>
      </div>
    </main>
  );
}
