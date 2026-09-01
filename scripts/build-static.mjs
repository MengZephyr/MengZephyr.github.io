import { existsSync, rmSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const projectDirectory = fileURLToPath(new URL("../", import.meta.url));
const cliPath = fileURLToPath(
  new URL("../node_modules/vinext/dist/cli.js", import.meta.url),
);
const staticEntryPoint = fileURLToPath(
  new URL("../dist/client/index.html", import.meta.url),
);

// A stale entry point must never make a failed build look successful.
rmSync(staticEntryPoint, { force: true });

const result = spawnSync(process.execPath, [cliPath, "build"], {
  cwd: projectDirectory,
  encoding: "utf8",
  env: process.env,
});

if (result.stdout) process.stdout.write(result.stdout);
if (result.stderr) process.stderr.write(result.stderr);

const unsignedStatus = result.status === null ? null : result.status >>> 0;
const completedBeforeKnownWindowsShutdownCrash =
  process.platform === "win32" &&
  unsignedStatus === 3221226505 &&
  existsSync(staticEntryPoint) &&
  result.stdout?.includes("Build complete.");

if (result.status === 0) {
  process.exit(0);
}

if (completedBeforeKnownWindowsShutdownCrash) {
  console.warn(
    "Vinext completed the static export before a Node.js Windows shutdown assertion; the verified output has been kept.",
  );
  process.exit(0);
}

console.error(`Static build failed with status ${result.status ?? "unknown"}.`);
process.exit(1);
