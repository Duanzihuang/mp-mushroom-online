require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([7],{

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(140);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_baeb3610_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(143);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(141)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-baeb3610"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_baeb3610_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\my\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-baeb3610", Component.options)
  } else {
    hotAPI.reload("data-v-baeb3610", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 141:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      userInfo: null
    };
  },
  onShow: function onShow() {
    this.getUserInfoData();
  },

  methods: {
    getUserInfoData: function getUserInfoData() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var res;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.$axios.get('my/info');

              case 2:
                res = _context.sent;


                _this.userInfo = res.data.message;

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },

    // 清除缓存
    clearCache: function clearCache() {
      wx.showToast({
        title: '缓存清理中...', //提示的内容,
        icon: 'loading', //图标,
        duration: 2000, //延迟时间,
        mask: true, //显示透明蒙层，防止触摸穿透,
        success: function success(res) {
          setTimeout(function () {
            wx.showToast({
              title: '清理缓存成功', //提示的内容,
              icon: 'success', //图标,
              duration: 1000, //延迟时间,
              mask: true //显示透明蒙层，防止触摸穿透
            });
          }, 2000);
        }
      });
    },

    // 联系客服
    contact: function contact() {
      wx.makePhoneCall({
        phoneNumber: '400-618-9090'
      });
    }
  }
});

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.userInfo) ? _c('div', {
    staticClass: "my-container"
  }, [_c('div', {
    staticClass: "header"
  }, [_c('img', {
    staticClass: "avatar",
    attrs: {
      "src": _vm.userInfo.avatar || '/static/images/avatar@2x.png',
      "alt": ""
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "nickname"
  }, [_vm._v(_vm._s(_vm.userInfo.nickname || '酷小鱼'))])], 1), _vm._v(" "), _c('div', {
    staticClass: "tips"
  }, [_c('div', {
    staticClass: "left"
  }, [_c('p', {
    staticClass: "title"
  }, [_vm._v(_vm._s(_vm.userInfo.study_hour))]), _vm._v(" "), _c('p', {
    staticClass: "subtitle"
  }, [_vm._v("累计学习小时")])], 1), _vm._v(" "), _c('div', {
    staticClass: "middle"
  }, [_c('p', {
    staticClass: "title"
  }, [_vm._v(_vm._s(_vm.userInfo.follow_count))]), _vm._v(" "), _c('p', {
    staticClass: "subtitle"
  }, [_vm._v("我的关注")])], 1), _vm._v(" "), _c('div', {
    staticClass: "right"
  }, [_c('p', {
    staticClass: "title"
  }, [_vm._v(_vm._s(_vm.userInfo.course_count))]), _vm._v(" "), _c('p', {
    staticClass: "subtitle"
  }, [_vm._v("我的课程")])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "cells"
  }, [_c('div', {
    staticClass: "cell"
  }, [_c('p', [_vm._v("学习历史")]), _vm._v(" "), _c('img', {
    attrs: {
      "src": "/static/images/arrow@2x.png",
      "alt": ""
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "cell"
  }, [_c('p', [_vm._v("消息提醒")]), _vm._v(" "), _c('img', {
    attrs: {
      "src": "/static/images/arrow@2x.png",
      "alt": ""
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "cell",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.clearCache
    }
  }, [_c('p', [_vm._v("清除缓存")]), _vm._v(" "), _c('img', {
    attrs: {
      "src": "/static/images/arrow@2x.png",
      "alt": ""
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "cell"
  }, [_c('p', [_vm._v("商务合作")]), _vm._v(" "), _c('img', {
    attrs: {
      "src": "/static/images/arrow@2x.png",
      "alt": ""
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "cell",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.contact
    }
  }, [_c('p', [_vm._v("在线客服")]), _vm._v(" "), _c('img', {
    attrs: {
      "src": "/static/images/arrow@2x.png",
      "alt": ""
    }
  })], 1)])]) : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-baeb3610", esExports)
  }
}

/***/ })

},[139]);