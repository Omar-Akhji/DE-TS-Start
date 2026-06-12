import type { ReactDoctorConfig } from "react-doctor/api";

export default {
  ignore: {
    files: [
      ".agents/**",
      ".next/**",
      ".claude/**",
      ".codex/**",
      ".cursor/**",
      ".gemini/**",
      "public/**",
      "node_modules/**",
      "types.d.ts",
      "next-env.d.ts",
      "docs/**",
      "*.png",
      "*.svg",
    ],
  },
} satisfies ReactDoctorConfig;
