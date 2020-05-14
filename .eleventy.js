module.exports = function (eleventyConfig) {
  // copy files
  eleventyConfig.addPassthroughCopy("./src/assets/");

  // override default config
  return {
    dir: {
      input: "src",
      output: "dist",
      include: "_includes"
    },
    templateFormats: ["html", "liquid", "njk", "md"],
    markdownTemplateEngine: "njk"
  };
};