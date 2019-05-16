module.exports = {
  lintOnSave: false,
  pages: {
      index: {
          entry: "examples/main.js",
          template: "public/index.html",
          filename: "index.html"
      }
  },
  css: {//css前置内联
    extract: false
  }
};
