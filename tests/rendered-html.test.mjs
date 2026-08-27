import assert from "node:assert/strict";
import { access, readFile, readdir } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

test("exports the complete portfolio homepage", async () => {
  const html = await readFile(new URL("out/index.html", root), "utf8");

  assert.match(html, /John Gulliver/);
  assert.match(html, /Creative frontend/);
  assert.match(html, /LOOT/);
  assert.match(html, /MIZRACH PINAZ/);
  assert.match(html, /ICE CREAM INVITATION/);
  assert.match(html, /Princess Jane Portfolio/);
  assert.match(html, /princess-jane-profile\.png/);
  assert.match(html, /johnlipata112904@gmail\.com/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape/);

  const chunkDirectory = new URL("out/_next/static/chunks/", root);
  const cssFile = (await readdir(chunkDirectory)).find((file) => file.endsWith(".css"));
  assert.ok(cssFile, "export should contain a stylesheet");
  const css = await readFile(new URL(cssFile, chunkDirectory), "utf8");
  assert.match(css, /prefers-reduced-motion/);
});

test("includes deployable assets and social metadata", async () => {
  const html = await readFile(new URL("out/index.html", root), "utf8");
  await access(new URL("out/og.png", root));
  await access(new URL("out/princess-jane-profile.png", root));

  assert.match(html, /property="og:image"/);
  assert.match(html, /name="twitter:card" content="summary_large_image"/);
  assert.match(html, /rel="canonical" href="https:\/\/dekuding1129\.github\.io\/?"/);
});

test("offers a downloadable résumé", async () => {
  const html = await readFile(new URL("out/index.html", root), "utf8");

  assert.match(html, /href="\/john-gulliver-resume\.pdf"/);
  assert.match(html, /Download résumé/);
  await access(new URL("out/john-gulliver-resume.pdf", root));
});
