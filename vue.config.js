module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "@/assets/styles/abstract/_index.scss";
        `
      }
    }
  }
};