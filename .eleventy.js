const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const md = require('markdown-it')();

module.exports = function(eleventyConfig) {
  eleventyConfig.setUseGitIgnore(false);
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addWatchTarget("./pliki-zrodlowe/style.css");
  eleventyConfig.addPassthroughCopy("./pliki-zrodlowe/style.css");
  eleventyConfig.addPassthroughCopy("./pliki-zrodlowe/obrazki");
  eleventyConfig.addPassthroughCopy("./pliki-zrodlowe/fonty");
  eleventyConfig.addPassthroughCopy("./pliki-zrodlowe/favicon.ico");
  eleventyConfig.addPassthroughCopy("./pliki-zrodlowe/icon-192.png");
  eleventyConfig.addPassthroughCopy("./pliki-zrodlowe/icon-512.png");
  eleventyConfig.addPassthroughCopy("./pliki-zrodlowe/icon.svg");
  eleventyConfig.addPassthroughCopy("./pliki-zrodlowe/apple-touch-icon.png");
  eleventyConfig.addPassthroughCopy("./pliki-zrodlowe/manifest.webmanifest");
  eleventyConfig.addPassthroughCopy("./pliki-zrodlowe/admin/config.yml");
  eleventyConfig.addNunjucksGlobal("teraz", require("./funkcje/teraz.js") );
  eleventyConfig.addFilter("md", string => md.render(string));
  eleventyConfig.addTransform("sierotki", require("./funkcje/sierotki.js") );
  if (process.env.NODE_ENV == "production") {
    eleventyConfig.addTransform("htmlmin", require("./funkcje/minify-html.js") );
  }
  
  return  {
    dir: {
      input: "pliki-zrodlowe",
      output: "wygenerowana-strona",
      layouts: "_szablony-stron",
      includes: "_fragmenty-szablonow"
    },
    markdownTemplateEngine : "njk"
  };
};
