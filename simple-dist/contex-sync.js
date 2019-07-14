(function(modules) {
  // The module cache
  var installedModules = {};

  // The require function
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
  __webpack_require__.m = modules;

  // expose the module cache
  __webpack_require__.c = installedModules;

  // define getter function for harmony exports
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
  __webpack_require__.r = function(exports) {
    Object.defineProperty(exports, '__esModule', { value: true });
  };

  // getDefaultExport function for compatibility with non-harmony modules
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
  return __webpack_require__((__webpack_require__.s = './src/index.ts'));
})(
  /************************************************************************/
  {
    './src/demos sync recursive \\.ts': function(
      module,
      exports,
      __webpack_require__
    ) {
      var map = {
        './demo1.ts': './src/demos/demo1.ts',
        './demo2.ts': './src/demos/demo2.ts'
      };

      function webpackContext(req) {
        var id = webpackContextResolve(req);
        var module = __webpack_require__(id);
        return module;
      }
      function webpackContextResolve(req) {
        var id = map[req];
        if (!(id + 1)) {
          // check for number or string
          var e = new Error('Cannot find module "' + req + '".');
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        }
        return id;
      }
      webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map);
      };
      webpackContext.resolve = webpackContextResolve;
      module.exports = webpackContext;
      webpackContext.id = './src/demos sync recursive \\.ts';
    },

    './src/demos/demo1.ts': function(
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'Demo1',
        function() {
          return Demo1;
        }
      );
      var Demo1 = /** @class */ (function() {
        function Demo1() {}
        return Demo1;
      })();
    },

    './src/demos/demo2.ts': function(
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'Demo2',
        function() {
          return Demo2;
        }
      );
      var Demo2 = /** @class */ (function() {
        function Demo2() {}
        return Demo2;
      })();
    },

    './src/index.ts': function(module, exports, __webpack_require__) {
      function importAll(contextLoader) {
        contextLoader.keys().forEach(function(id) {
          return console.log(contextLoader(id));
        });
      }
      var contextLoader = __webpack_require__(
        './src/demos sync recursive \\.ts'
      );
      importAll(contextLoader);
    }
  }
);
//# sourceMappingURL=bundle.js.map
