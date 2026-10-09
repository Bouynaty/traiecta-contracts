import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["test/**/*.test.ts"],
    environment: "node",
    // The parity suite reads the Foundry artifacts and the Rust sources off disk. A stale cache
    // there would be a test passing against a build nobody has anymore, which is worse than slow.
    isolate: true,
    // `@vitest/coverage-v8` is a devDependency dependabot keeps version locked to vitest, but
    // nothing invoked it. CI shows the table, and the lcov file is what editors read.
    coverage: {
      provider: "v8",
      reporter: ["text", "lcov"],
    },
  },
});
