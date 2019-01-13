let baseUrl = "/";

module.exports = {
  // options...

  devServer: {
    port: 3000,
    publicPath: baseUrl, // 和 baseUrl 保持一致
    proxy: {
      "/api/": {
        target: "http://127.0.0.1:7001",
        ws: true,
        changOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  }
};
