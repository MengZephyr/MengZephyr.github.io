import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import { test } from "node:test";

const outputDirectory = new URL("../dist/client/", import.meta.url);
const indexFile = new URL("index.html", outputDirectory);

test("the static homepage contains the current portfolio content", async () => {
  const html = await readFile(indexFile, "utf8");

  assert.match(html, /Meng Zhang \(Zephyr\)/);
  assert.match(html, /Smart Physics Group/);
  assert.match(html, /Publications/);
  assert.match(html, /lynnzephyr@gmail\.com/);
  assert.match(html, /Co-designed with ChatGPT/);
  assert.doesNotMatch(html, /Page 1 of 2/);

  const publicationCount = html.match(/<article class="publication">/g)?.length ?? 0;
  assert.equal(publicationCount, 13);
});

test("essential image assets are included in the static export", async () => {
  const requiredAssets = [
    "materials/TravelBanff_202508.jpg",
    "materials/smart-physics-group.jpg",
    "materials/p13.jpg",
  ];

  await Promise.all(
    requiredAssets.map((asset) => access(new URL(asset, outputDirectory))),
  );
});
