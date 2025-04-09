import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  sourcemap: true,
  clean: true,
  target: "esnext",
  outDir: "dist",
  // 👇 This is key
  onSuccess: "cp src/tailwind.css dist/tailwind.css",
});
