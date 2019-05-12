require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([1],{

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(159);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_2a65465a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(166);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(160)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2a65465a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_2a65465a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\study\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2a65465a", Component.options)
  } else {
    hotAPI.reload("data-v-2a65465a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 160:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_DzhMpCircle__ = __webpack_require__(162);


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
  components: {
    DzhMpCircle: __WEBPACK_IMPORTED_MODULE_2__components_DzhMpCircle__["a" /* default */]
  },
  data: function data() {
    return {
      isEmpty: false, //是否为空【是否有学习记录】
      studyProgresses: []
    };
  },
  onShow: function onShow() {
    // 获取学习进度数据
    this.getStudyProgressData();
  },

  methods: {
    getStudyProgressData: function getStudyProgressData() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var res;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.$axios.get('study/progress');

              case 2:
                res = _context.sent;


                _this.isEmpty = res.data.message.length === 0;

                _this.studyProgresses = res.data.message;

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    }
  }
});

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_DzhMpCircle_vue__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_fe2fe66c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_DzhMpCircle_vue__ = __webpack_require__(165);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(163)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-fe2fe66c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_DzhMpCircle_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_fe2fe66c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_DzhMpCircle_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\DzhMpCircle.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] DzhMpCircle.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-fe2fe66c", Component.options)
  } else {
    hotAPI.reload("data-v-fe2fe66c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 163:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    canvasId: {
      type: Number
    },
    width: {
      type: Number,
      default: 100
    },
    height: {
      type: Number,
      default: 100
    },
    backgroundColor: {
      type: String,
      default: '#f3f3f3'
    },
    foregroundColor: {
      type: String,
      default: '#B4D66E'
    },
    lineWidth: {
      type: Number,
      default: 5
    },
    progress: {
      type: Number,
      default: 100
    }
  },
  onReady: function onReady() {
    if (this.progress <= 30) {
      this.foregroundColor = '#ff0000';
    } else if (this.progress > 30 && this.progress < 50) {
      this.foregroundColor = '#FF783B';
    } else {
      this.foregroundColor = '#B4D66E';
    }

    // 背景色
    var backgroundCtx = wx.createCanvasContext('backgroundCanvas' + this.canvasId);
    // 前景色
    var foregroundCtx = wx.createCanvasContext('foregroundCanvas' + this.canvasId);

    // 绘制背景色
    backgroundCtx.setStrokeStyle(this.backgroundColor);
    backgroundCtx.setLineWidth(this.lineWidth);
    // 绘制圆
    backgroundCtx.arc(this.width / 2 + this.lineWidth / 2, this.height / 2 + this.lineWidth / 2, this.width / 2 - this.lineWidth, 0, 2 * Math.PI, true);
    backgroundCtx.stroke();

    // 绘制前景色
    foregroundCtx.setStrokeStyle(this.foregroundColor);
    foregroundCtx.setLineWidth(this.lineWidth);
    foregroundCtx.setLineCap('round');
    foregroundCtx.arc(this.width / 2 + this.lineWidth / 2, this.height / 2 + this.lineWidth / 2, this.width / 2 - this.lineWidth, -0.5 * Math.PI, this.progress / 100 * 2 * Math.PI - 0.5 * Math.PI, false);
    foregroundCtx.stroke();

    // 绘制文字
    foregroundCtx.setFillStyle(this.foregroundColor);
    foregroundCtx.setFontSize(12);
    foregroundCtx.fillText(parseInt(this.progress) + '%', this.width / 2 - 10, this.height / 2 + 6);

    // 绘制
    backgroundCtx.draw();
    foregroundCtx.draw();
  }
});

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "mp-circle-container"
  }, [_c('canvas', {
    staticClass: "mp-circle",
    style: ({
      width: _vm.width + 'px',
      height: _vm.height + 'px'
    }),
    attrs: {
      "canvas-id": 'backgroundCanvas' + _vm.canvasId
    }
  }), _vm._v(" "), _c('canvas', {
    staticClass: "mp-circle",
    style: ({
      width: _vm.width + 'px',
      height: _vm.height + 'px'
    }),
    attrs: {
      "canvas-id": 'foregroundCanvas' + _vm.canvasId
    }
  })])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-fe2fe66c", esExports)
  }
}

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "study-container"
  }, [_vm._l((_vm.studyProgresses), function(item, index) {
    return _c('div', {
      key: item.sid,
      staticClass: "study-item"
    }, [_c('img', {
      attrs: {
        "src": item.icon,
        "alt": ""
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "meta"
    }, [_c('p', {
      staticClass: "title"
    }, [_vm._v(_vm._s(item.title))]), _vm._v(" "), _c('p', {
      staticClass: "progress"
    }, [_vm._v("已学习" + _vm._s(item.study_hour) + "课时/" + _vm._s(item.total_hour || 0) + "课时")])], 1), _vm._v(" "), _c('div', {
      staticClass: "circle"
    }, [_c('dzh-mp-circle', {
      attrs: {
        "canvasId": item.sid,
        "progress": item.study_progress,
        "width": 55,
        "height": 55,
        "mpcomid": '0_' + index
      }
    })], 1)])
  }), _vm._v(" "), (_vm.isEmpty) ? _c('div', [_c('p', {
    staticClass: "no-study-tip"
  }, [_vm._v("您还没有任何学习记录哦，赶快去学习吧~")])], 1) : _vm._e()], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2a65465a", esExports)
  }
}

/***/ })

},[158]);