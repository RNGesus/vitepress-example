import type { Theme } from "vitepress";
import theme from "vitepress/theme";
import TwoSlashFloatingVue from "@shikijs/vitepress-twoslash/client";
import "@shikijs/vitepress-twoslash/style.css";

export default {
  extends: theme,
  enhanceApp({ app }) {
    app.use(TwoSlashFloatingVue);
  },
} satisfies Theme;
