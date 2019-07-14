(function(modules) {
  // 缓存所有被加载过的模块(文件)
  var installedModules = {};
  // 模块(文件)加载器
  function __webpack_require__(moduleId) {
    // 走 cache
    if (installedModules[moduleId]) {
      return installedModules[moduleId].exports;
    }
    // Create a new module (and put it into the cache) 解释比我清楚
    var module = (installedModules[moduleId] = {
      i: moduleId,
      l: false,
      exports: {}
    });
    // 执行我们的模块(文件) 目前就是 ./src/index.ts 并且传入 3 个参数
    modules[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__
    );
    // Flag the module as loaded 解释比我清楚
    module.l = true;
    // Return the exports of the module 解释比我清楚
    return module.exports;
  }
  // 开始加载入口文件
  return __webpack_require__((__webpack_require__.s = './src/index.ts'));
})({
  './src/index.ts': function(module, exports) {
    console.log('123');
  }
});