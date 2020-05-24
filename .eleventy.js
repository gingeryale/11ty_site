const svgContents = require("eleventy-plugin-svg-contents");

module.exports = function (eleventyConfig) {
  // copy files
  eleventyConfig.addPassthroughCopy("./src/assets/");
  eleventyConfig.addPlugin(svgContents);


  // override default config
  return {
    dir: {
      input: "src",
      output: "_site",
      include: "_includes"
    },
    templateFormats: ["html", "liquid", "njk", "md"],
    markdownTemplateEngine: "njk"
  };




};
