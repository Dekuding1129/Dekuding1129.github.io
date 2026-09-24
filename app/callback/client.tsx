"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function CallbackClient() {
  const params = useSearchParams();
  const [copied, setCopied] = useState(false);
  const code = params.get("code") ?? "";
  const state = params.get("state") ?? "";
  const error = params.get("error") ?? "";
  const errorDesc = params.get("error_description") ?? "";

  useEffect(() => {
    document.title = "TikTok OAuth Callback — Everything_Else";
  }, []);

  const copy = async () => {
    if (!code) return;
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard may be blocked — user can select manually
    }
  };

  return (
    <main className="section-shell" style={{ maxWidth: 860 }}>
      <p className="section-label">Everything_Else — TikTok OAuth</p>
      <h1 style={{ fontSize: "clamp(28px,4vw,48px)", lineHeight: 1.1 }}>Authorization callback</h1>
      <p style={{ color: "#aaa69e", lineHeight: 1.7 }}>
        Copy the code below and paste it into your terminal exchange command. This page never sends
        the code anywhere — it stays in your browser.
      </p>
      {error ? (
        <div style={{ background: "#3a1515", padding: 16, borderRadius: 12 }}>
          <p style={{ margin: 0, color: "#ff9c9c" }}>Authorization failed: {error}</p>
          {errorDesc ? <p style={{ color: "#c9a3a3" }}>{errorDesc}</p> : null}
        </div>
      ) : code ? (
        <div style={{ display: "grid", gap: 12 }}>
          <code
            style={{
              display: "block",
              padding: 16,
              background: "#1a1a18",
              borderRadius: 12,
              wordBreak: "break-all",
              color: "#ece7dc",
            }}
          >
            {code}
          </code>
          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            <button
              onClick={copy}
              style={{
                padding: "10px 18px",
                borderRadius: 10,
                border: "none",
                cursor: "pointer",
                background: "#c8793f",
                color: "#0d0d0c",
                fontWeight: 700,
              }}
            >
              {copied ? "Copied!" : "Copy code"}
            </button>
            {state ? <span style={{ color: "#888" }}>state: {state}</span> : null}
          </div>
          <p style={{ color: "#aaa69e" }}>
            In terminal run: <br />
            <code>python3 hermes_tiktok.py exchange &lt;code&gt; --redirect https://dekuding1129.github.io/callback/</code>
          </p>
        </div>
      ) : (
        <p style={{ color: "#c9c4ba" }}>
          No <code>?code=</code> found in URL. Open this page via TikTok Authorize — TikTok will redirect
          back here with <code>?code=...</code>.
        </p>
      )}
      <p><a href="/" style={{ textDecoration: "underline" }}>← Back to portfolio</a></p>
    </main>
  );
}
