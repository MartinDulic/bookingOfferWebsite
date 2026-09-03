import nextCoreWebVitals from "eslint-config-next/core-web-vitals";

const eslintConfig = [
  {
    ignores: [".next/**", "out/**", "public/~partytown/**"],
  },
  ...nextCoreWebVitals,
];

export default eslintConfig;
