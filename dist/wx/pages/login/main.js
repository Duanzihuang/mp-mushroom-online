require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([7],{

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(134);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_7c1a931a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(137);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(135)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7c1a931a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_7c1a931a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\login\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7c1a931a", Component.options)
  } else {
    hotAPI.reload("data-v-7c1a931a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 135:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 136:
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
      isWxLogin: false
    };
  },
  onShow: function onShow() {
    if (wx.getStorageSync('token')) {
      wx.reLaunch({ url: '/pages/home/main' });
    }
  },

  methods: {
    // 跳转到手机号登录页面
    phoneLogin: function phoneLogin() {
      wx.navigateTo({
        url: '/pages/phone-login/main'
      });
    },

    // 选择微信登录
    goToWxLogin: function goToWxLogin() {},

    // 微信登录
    wxLogin: function wxLogin(e) {
      var _this = this;

      // this.isWxLogin = true

      if (e.mp.detail.errMsg === 'getUserInfo:fail auth deny') {
        // this.isWxLogin = false
        return;
      }

      // 获取登录的code
      wx.login({
        success: function () {
          var _ref = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(_ref2) {
            var code = _ref2.code;
            var res;
            return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return _this.$axios.post('/user/wxlogin', {
                      code: code,
                      nickname: e.mp.detail.userInfo.nickName,
                      avatar: e.mp.detail.userInfo.avatarUrl
                    });

                  case 2:
                    res = _context.sent;


                    if (res.data.status === 0) {
                      // 登录成功
                      // 保存token
                      wx.setStorageSync('token', res.data.token);

                      // 跳转到首页
                      wx.reLaunch({ url: '/pages/home/main' });
                    } else {
                      wx.showModal({
                        content: res.data.message, //提示的内容,
                        showCancel: false, //是否显示取消按钮,
                        confirmText: '确定', //确定按钮的文字，默认为取消，最多 4 个字符,
                        confirmColor: '#ff8d44' //确定按钮的文字颜色
                      });
                    }

                  case 4:
                  case 'end':
                    return _context.stop();
                }
              }
            }, _callee, _this);
          }));

          return function success(_x) {
            return _ref.apply(this, arguments);
          };
        }()
      });
    },

    // 取消
    cancel: function cancel() {
      this.isWxLogin = false;
    }
  }
});

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      "height": "100%"
    }
  }, [(!_vm.isWxLogin) ? _c('div', {
    staticClass: "login-container"
  }, [_c('img', {
    staticClass: "logo",
    attrs: {
      "src": "/static/images/logo@2x.png",
      "alt": ""
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "title"
  }, [_vm._v("蘑菇在线")]), _vm._v(" "), _c('img', {
    staticClass: "login-tips",
    attrs: {
      "src": "/static/images/login_tips@2x.png",
      "alt": ""
    }
  }), _vm._v(" "), _c('button', {
    staticClass: "wx-login-button",
    attrs: {
      "open-type": "getUserInfo",
      "plain": "",
      "eventid": '0'
    },
    on: {
      "getuserinfo": _vm.wxLogin
    }
  }, [_c('img', {
    staticClass: "wx-login-img",
    attrs: {
      "src": "/static/images/wx_login@2x.png",
      "alt": ""
    }
  })]), _vm._v(" "), _c('p', {
    staticClass: "phone-login",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.phoneLogin
    }
  }, [_vm._v("手机号登录")]), _vm._v(" "), _c('p', {
    staticClass: "bottom-tip"
  }, [_vm._v("Copyright © 2019 蘑菇在线 ")])], 1) : (_vm.isWxLogin) ? _c('div', {
    staticClass: "wx-login-container"
  }) : _vm._e()])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7c1a931a", esExports)
  }
}

/***/ })

},[133]);