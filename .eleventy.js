const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const feedPlugin = require("@11ty/eleventy-plugin-rss");
const md = require('markdown-it')();

module.exports = function(eleventyConfig) {
  eleventyConfig.setUseGitIgnore(false);
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPlugin(feedPlugin);
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
  eleventyConfig.addFilter("polskadata", require("./funkcje/polska-data.js") );
  eleventyConfig.addTransform("sierotki", require("./funkcje/sierotki.js") );

  eleventyConfig.addCollection('kategorie', collection => {
    const wszystkieTagi = [];
    collection.getFilteredByTag("blog").forEach(item => {
      if (item.data.tags) {
        if (typeof item.data.tags === 'string') {
          wszystkieTagi.push(item.data.tags);
        } else {
          item.data.tags.forEach(tag => wszystkieTagi.push(tag));
        }
      }
    });
    tagiBezBlog = wszystkieTagi.filter(function(item) {
      return item !== "blog"
    }).sort();
    return [...new Set(tagiBezBlog)];
  });

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
