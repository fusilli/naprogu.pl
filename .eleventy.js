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
  eleventyConfig.addPassthroughCopy("./pliki-zrodlowe/robots.txt");
  eleventyConfig.addPassthroughCopy("./pliki-zrodlowe/manifest.webmanifest");
  eleventyConfig.addPassthroughCopy("./pliki-zrodlowe/cookieconsent");
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
  
  return  {
    dir: {
      input: "pliki-zrodlowe",
      output: "wygenerowana-strona",
      layouts: "_szablony-stron",
      includes: "_fragmenty-szablonow",
      data: "dane",
    },
    markdownTemplateEngine : "njk"
  };
};
