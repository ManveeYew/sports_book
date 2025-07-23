import fs from "fs";
import path from "path";

const outDir = "./out";
const files = fs.readdirSync(outDir);

files.forEach((file) => {
  if (file.endsWith(".html") && file !== "index.html" && file !== "404.html") {
    fs.unlinkSync(path.join(outDir, file));
  }
});
