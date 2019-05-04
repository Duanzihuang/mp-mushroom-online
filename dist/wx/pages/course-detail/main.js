require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([9],{

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(110);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_df5f8466_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(118);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(111)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-df5f8466"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_df5f8466_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\course-detail\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-df5f8466", Component.options)
  } else {
    hotAPI.reload("data-v-df5f8466", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 111:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Star__ = __webpack_require__(47);


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
//
//
//
//

// 导入子组件

/* harmony default export */ __webpack_exports__["a"] = ({
  components: {
    Star: __WEBPACK_IMPORTED_MODULE_2__components_Star__["a" /* default */]
  },
  data: function data() {
    return {
      course_id: null, //课程id
      course_detail: null, // 课程详情数据
      isPlaying: false, //是否正在播放视频
      menus: ['目录', '讲师介绍', '评价(2541)'],
      selectIndex: 0 // 选中的索引
    };
  },
  onLoad: function onLoad(options) {
    this.course_id = options.id;
    this.getCourseDetailData(options.id);
  },
  onUnload: function onUnload() {
    this.isPlaying = false;
    this.selectIndex = 0;
  },

  methods: {
    getCourseDetailData: function getCourseDetailData(id) {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var res;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.$axios.get('course/' + id);

              case 2:
                res = _context.sent;


                _this.course_detail = res.data.message;

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },

    // 播放课程简介视频
    playCourseVideo: function playCourseVideo() {
      this.isPlaying = true;
      var videoContent = wx.createVideoContext('courseVideoId');
      videoContent.play();
    },

    // 去看视频学习
    goToStudy: function goToStudy() {
      var videoContent = wx.createVideoContext('courseVideoId');
      videoContent.pause();

      wx.navigateTo({
        url: '/pages/play/main?id=' + this.course_id + '&title=' + this.course_detail.course.title + '&price=' + this.course_detail.course.price
      });
    }
  }
});

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.course_detail) ? _c('div', {
    staticClass: "course-detail-container"
  }, [_c('div', [(!_vm.isPlaying) ? _c('div', {
    staticClass: "cover_image"
  }, [_c('img', {
    attrs: {
      "src": _vm.course_detail.course.cover_image_url,
      "alt": ""
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "play"
  }, [_c('img', {
    attrs: {
      "src": "/static/images/play@2x.png",
      "alt": "",
      "eventid": '0'
    },
    on: {
      "click": _vm.playCourseVideo
    }
  }), _vm._v(" "), _c('p', [_vm._v("播放课程简介")])], 1)]) : _c('div', {
    staticClass: "course_video"
  }, [_c('video', {
    attrs: {
      "id": "courseVideoId",
      "src": _vm.course_detail.course.course_video_url
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "introduction"
  }, [_c('div', {
    staticClass: "title-price"
  }, [_c('span', [_vm._v(_vm._s(_vm.course_detail.course.title))]), _vm._v(" "), _c('span', [_vm._v("￥" + _vm._s(_vm.course_detail.course.price) + ".00")])]), _vm._v(" "), _c('p', {
    staticClass: "introduce"
  }, [_vm._v(_vm._s(_vm.course_detail.course.introduction))]), _vm._v(" "), _c('div', {
    staticClass: "star"
  }, [_c('star', {
    attrs: {
      "score": _vm.course_detail.course.score,
      "mpcomid": '0'
    }
  }), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.course_detail.course.study_count) + "人在学")])], 1), _vm._v(" "), _c('div', {
    staticClass: "study-share"
  }, [_c('img', {
    attrs: {
      "src": "/static/images/start_study@2x.png",
      "alt": "",
      "eventid": '1'
    },
    on: {
      "click": _vm.goToStudy
    }
  }), _vm._v(" "), _vm._m(0)])], 1), _vm._v(" "), _c('div', {
    staticClass: "catalog"
  }, [_c('div', {
    staticClass: "head"
  }, _vm._l((_vm.menus), function(item, index) {
    return _c('span', {
      key: index,
      class: {
        active: _vm.selectIndex === index
      },
      attrs: {
        "eventid": '2_' + index
      },
      on: {
        "click": function($event) {
          _vm.selectIndex = index
        }
      }
    }, [_vm._v(_vm._s(item))])
  })), _vm._v(" "), _c('div', {
    staticClass: "body"
  }, [(_vm.selectIndex === 0) ? _c('div', {
    staticClass: "catelog-container"
  }, [_vm._l((_vm.course_detail.videos), function(item, index) {
    return _c('p', {
      key: item.id
    }, [_vm._v("\n          " + _vm._s(index + 1) + "." + _vm._s(item.name) + "\n        ")])
  }), _vm._v(" "), (!_vm.course_detail.videos) ? _c('p', [_vm._v("\n          暂无课程视频哦，请联系客服添加~\n        ")]) : _vm._e()], 2) : (_vm.selectIndex === 1) ? _c('div', {
    staticClass: "lecturer-container"
  }, [(_vm.course_detail.lecturer) ? _c('div', {
    staticClass: "info"
  }, [_c('img', {
    attrs: {
      "src": _vm.course_detail.lecturer.avatar,
      "alt": ""
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "name-follow"
  }, [_c('p', [_vm._v(_vm._s(_vm.course_detail.lecturer.name))]), _vm._v(" "), _c('p', [_vm._v("关注人数" + _vm._s(_vm.course_detail.lecturer.follow_count))])], 1), _vm._v(" "), _c('p', {
    staticClass: "follow"
  }, [_vm._v("\n            关注\n          ")])], 1) : _vm._e(), _vm._v(" "), (_vm.course_detail.lecturer) ? _c('div', {
    staticClass: "introduce"
  }, [_c('p', [_vm._v(_vm._s(_vm.course_detail.lecturer.introduction))])], 1) : _vm._e(), _vm._v(" "), (!_vm.course_detail.lecturer) ? _c('p', {
    staticStyle: {
      "color": "#636363",
      "font-size": "15px"
    }
  }, [_vm._v("\n          暂无讲师简介哦~\n        ")]) : _vm._e()], 1) : _c('div', {
    staticClass: "comment-container"
  }, [_vm._l((_vm.course_detail.comments), function(item, index) {
    return _c('div', {
      key: item.id,
      staticClass: "comment-item"
    }, [_c('div', {
      staticClass: "info"
    }, [_c('img', {
      attrs: {
        "src": item.avatar,
        "alt": ""
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "nickname-content"
    }, [_c('div', {
      staticClass: "nickname"
    }, [_c('div', [_vm._v(_vm._s(item.nickname))]), _vm._v(" \n                "), _c('div', [_c('star', {
      attrs: {
        "score": item.score,
        "mpcomid": '1_' + index
      }
    })], 1)]), _vm._v(" "), _c('div', [_vm._v("\n                " + _vm._s(item.content) + "\n              ")])]), _vm._v(" "), _c('p', {
      staticClass: "time"
    }, [_vm._v("1小时前")]), _c('p')], 1), _vm._v(" "), _vm._m(1, true)])
  }), _vm._v(" "), (!_vm.course_detail.comments) ? _c('p', {
    staticStyle: {
      "color": "#636363",
      "font-size": "15px",
      "padding": "38rpx"
    }
  }, [_vm._v("\n          暂无评论哦，请学习之后再评价~\n        ")]) : _vm._e()], 2)])])]) : _vm._e()
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "share-button"
  }, [_c('img', {
    attrs: {
      "src": "/static/images/share@2x.png",
      "alt": ""
    }
  })])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "star"
  }, [_c('img', {
    attrs: {
      "src": "/static/images/thumbs-up@2x.png",
      "alt": ""
    }
  }), _vm._v(" "), _c('img', {
    attrs: {
      "src": "/static/images/comment@2x.png",
      "alt": ""
    }
  })])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-df5f8466", esExports)
  }
}

/***/ })

},[109]);