const fs = require("fs");
const path = require("path");

const root = process.cwd();
const htmlFiles = [];

walk(root);

const missing = [];

for (const file of htmlFiles) {
  const html = fs.readFileSync(file, "utf8");
  const refs = [...html.matchAll(/(?:href|src)="([^"]+)"/g)].map((match) => match[1]);

  for (const ref of refs) {
    if (ref.startsWith("http") || ref.startsWith("mailto:") || ref.startsWith("#")) {
      continue;
    }

    const cleanRef = ref.split("#")[0].split("?")[0];
    if (!cleanRef) continue;

    const resolved = cleanRef.startsWith("/")
      ? path.join(root, cleanRef)
      : path.resolve(path.dirname(file), cleanRef);

    const exists = fs.existsSync(resolved) || fs.existsSync(path.join(resolved, "index.html"));
    if (!exists) {
      missing.push(`${path.relative(root, file)} -> ${ref}`);
    }
  }
}

if (missing.length) {
  console.error("Referencias faltantes:");
  console.error(missing.join("\n"));
  process.exit(1);
}

console.log(`Auditoria OK: ${htmlFiles.length} paginas revisadas.`);

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === "node_modules" || entry.name === ".git") continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    if (entry.isFile() && entry.name.endsWith(".html")) htmlFiles.push(full);
  }
}
