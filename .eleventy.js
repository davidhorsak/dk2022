const htmlmin = require("html-minifier");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/images/**/*");
  eleventyConfig.addPassthroughCopy("./src/fonts/**/*");

  eleventyConfig.addTransform("htmlmin", function(content, outputPath) {
    if(outputPath.endsWith(".html")) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      });

      return minified;
    }

    return content;
  });

  return {
    dir: {
      input: "src",
      output: "public"
    },
  };
};
