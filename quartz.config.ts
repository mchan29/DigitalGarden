import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Chandus digital garden",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "quartz.jzhao.xyz",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Iosevka Etoile",
        code: "Iosevka",
      },
     colors: {
        lightMode: {
          light: "#fbfbfb",         // Primary background
          lightgray: "#e4e4e7",     // Borders, modifiers, structural rules
          gray: "#71717a",          // Muted text, metadata lines
          darkgray: "#1f1f23",      // Normal body text
          dark: "#18181b",          // Strong accent text / Base Titles
          secondary: "#3730a3",     // Indigo Link Accent Color
          tertiary: "#0f766e",      // Teal Link Accent Hover Color
          highlight: "rgba(99, 102, 241, 0.15)", // Content selection tint
          textHighlight: "rgba(234, 179, 8, 0.3)", // Yellow markdown highlight
        },
        darkMode: {
          light: "#050506",         // Primary deep dark background
          lightgray: "#16161a",     // Dark modifier border
          gray: "#71717a",          // Dark muted text / lines
          darkgray: "#b9b9bc",      // Crisp readable light-grey body text
          dark: "#f4f4f5",          // Bright white titles
          secondary: "#6366f1",     // Vivid Indigo Link Accent
          tertiary: "#14b8a6",      // Vivid Teal Link Accent Hover
          highlight: "rgba(99, 102, 241, 0.25)", // Content selection tint
          textHighlight: "rgba(99, 102, 241, 0.35)", // Deep blue markdown highlight
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
