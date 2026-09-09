const fs = require("fs");
const path = require("path");

const assetsDir = path.join(__dirname, "..", "public", "assets");

if (!fs.existsSync(assetsDir) || fs.lstatSync(assetsDir).isSymbolicLink()) {
  console.error(
    "Missing real public/assets directory.\n" +
      "From repo root run:\n" +
      "  rsync -a --delete assets/ web/public/assets/",
  );
  process.exit(1);
}

const video = path.join(assetsDir, "video", "hero-loop.mp4");
if (!fs.existsSync(video)) {
  console.error("Missing public/assets/video/hero-loop.mp4");
  process.exit(1);
}

console.log("public/assets OK");
