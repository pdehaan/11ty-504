module.exports = (eleventyConfig) => {
  const {Liquid} = require("liquidjs");
  const options = {
    extname: ".liquid",
    dynamicPartials: true,
    strictFilters: true,
    root: ["_includes"]
  };
  eleventyConfig.setLibrary("liquid", new Liquid(options));

  eleventyConfig.addFilter("eleventy_version", () => require("@11ty/eleventy/package.json").version);
  eleventyConfig.addFilter("liquid_version", () => require("liquidjs/package.json").version);

  return {
    dir: {
      input: "src",
      output: "www"
    }
  };
};
