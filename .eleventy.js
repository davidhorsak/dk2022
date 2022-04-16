module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/css/*.css");
  eleventyConfig.addPassthroughCopy("./src/js/*.js");
  eleventyConfig.addPassthroughCopy("./src/dist/*.js");
  eleventyConfig.addPassthroughCopy("./src/images/*");
  eleventyConfig.addPassthroughCopy("./src/fonts/**/*");

  return {
    dir: {
      input: "src",
      output: "public"
    },
  };
};
