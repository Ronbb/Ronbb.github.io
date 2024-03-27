import { join } from "path";
import { defineConfig } from "rspress/config";
import rehypeMermaid from "rehype-mermaid";
import {
  pluginShiki,
  createTransformerLineNumber,
  createTransformerDiff,
  createTransformerErrorLevel,
  createTransformerFocus,
  createTransformerHighlight,
} from "@rspress/plugin-shiki";

export default defineConfig({
  root: join(__dirname, "docs"),
  title: "Ronbb",
  description: "Tech and more",
  lang: "zh",
  icon: "/icon.webp",
  logo: "/icon.webp",
  mediumZoom: true,
  globalStyles: join(__dirname, "docs/public/styles.css"),
  markdown: {
    mdxRs: false,
    rehypePlugins: [
      [
        rehypeMermaid as any,
        {
          strategy: "img-svg",
          mermaidConfig: {
            theme: "base",
            themeVariables: {
              background: "#FFFFFF",
              primaryColor: "#7F7F7F",
              primaryTextColor: "#FFFFFF",
              primaryBorderColor: "#7F7F7F",
              lineColor: "#7F7F7F",
              secondaryColor: "#7F7F7F",
              secondaryTextColor: "#FFFFFF",
              secondaryBorderColor: "#7F7F7F",
              tertiaryColor: "#7F7F7F",
              tertiaryTextColor: "#FFFFFF",
              tertiaryBorderColor: "#7F7F7F",
            },
          },
        },
      ],
    ],
  },
  themeConfig: {
    enableScrollToTop: true,
    enableContentAnimation: true,
    lastUpdated: true,
    socialLinks: [
      { icon: "github", mode: "link", content: "https://github.com/Ronbb" },
    ],
    locales: [
      {
        lang: "zh",
        label: "简体中文",
        editLink: {
          docRepoBaseUrl: "https://github.com/Ronbb/docs",
          text: "📝 在 GitHub 上编辑此页",
        },
        prevPageText: "上一篇",
        nextPageText: "下一篇",
        outlineTitle: "目录",
        searchPlaceholderText: "搜索",
        lastUpdatedText: "最近更新",
      },
    ],
  },
  plugins: [
    pluginShiki({
      langs: [
        "bat",
        "c",
        "c++",
        "css",
        "dart",
        "docker",
        "go",
        "groovy",
        "html",
        "javascript",
        "json",
        "jsonc",
        "jsx",
        "kotlin",
        "latex",
        "lua",
        "make",
        "markdown",
        "mdx",
        "nginx",
        "powershell",
        "python",
        "r",
        "ruby",
        "rust",
        "sql",
        "swift",
        "tsx",
        "typescript",
        "xml",
      ],
      transformers: [
        createTransformerLineNumber(),
        createTransformerDiff(),
        createTransformerErrorLevel(),
        createTransformerFocus(),
        createTransformerHighlight(),
      ],
    }),
  ],
});
