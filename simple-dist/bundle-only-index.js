// 仅有 index.ts 编译之后 webpack 的总体加载结构

(function(modules) {
  // 加载过的模块（文件）缓存
  var installedModules = {};
  // 模块（文件）加载器
  function __webpack_require__(moduleId) {
    // Check if module is in cache
    if (installedModules[moduleId]) {
      return installedModules[moduleId].exports;
    }
    // Create a new module (and put it into the cache)
    var module = (installedModules[moduleId] = {
      i: moduleId,
      l: false,
      exports: {}
    });
    // Execute the module function
    modules[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__
    );
    // Flag the module as loaded
    module.l = true;
    // Return the exports of the module
    return module.exports;
  }
  // expose the modules object (__webpack_modules__)
  // 把所有的模块挂载在 加载器 __webpack_require__.m 属性上
  /**
   *  __webpack_require__.m = {
   *    './src/index.ts': function(module, exports) {
          console.log('123');
        }
   *  }
   */
  __webpack_require__.m = modules;
  // expose the module cache
  // 把所有加载过的模块挂在 加载器 __webpack_require__.c 属性上
  __webpack_require__.c = installedModules;
  // define getter function for harmony exports
  // 不重要
  __webpack_require__.d = function(exports, name, getter) {
    if (!__webpack_require__.o(exports, name)) {
      Object.defineProperty(exports, name, {
        configurable: false,
        enumerable: true,
        get: getter
      });
    }
  };
  // define __esModule on exports
  // 不重要
  __webpack_require__.r = function(exports) {
    Object.defineProperty(exports, '__esModule', { value: true });
  };
  // getDefaultExport function for compatibility with non-harmony modules
  // 不重要
  __webpack_require__.n = function(module) {
    var getter =
      module && module.__esModule
        ? function getDefault() {
            return module['default'];
          }
        : function getModuleExports() {
            return module;
          };
    __webpack_require__.d(getter, 'a', getter);
    return getter;
  };
  // Object.prototype.hasOwnProperty.call
  __webpack_require__.o = function(object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  // __webpack_public_path__
  __webpack_require__.p = '';
  // Load entry module and return exports
  // 开干
  return __webpack_require__((__webpack_require__.s = './src/index.ts'));
})({
  './src/index.ts': function(module, exports) {
    console.log('123');
  }
});
//# sourceMappingURL=bundle.js.map
