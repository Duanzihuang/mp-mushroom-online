require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([10],{

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(111);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_df5f8466_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(119);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(112)
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

/***/ 112:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Star__ = __webpack_require__(29);


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
      menus: ['目录', '讲师介绍', '评价'],
      selectIndex: 0, // 选中的索引
      isHidden: false // 是否隐藏
    };
  },
  onLoad: function onLoad(options) {
    this.course_id = options.id;
    this.getCourseDetailData();
  },
  onShow: function onShow() {
    if (this.isHidden) {
      this.getCourseDetailData();
    }
  },
  onHide: function onHide() {
    this.isHidden = true;
  },
  onUnload: function onUnload() {
    this.isPlaying = false;
    this.selectIndex = 0;
    this.isHidden = false;
  },

  // 分享
  onShareAppMessage: function onShareAppMessage(options) {},

  methods: {
    getCourseDetailData: function getCourseDetailData() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var res;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.$axios.get('course/' + _this.course_id);

              case 2:
                res = _context.sent;


                _this.course_detail = res.data.message;
                // 设置评论总数
                _this.menus[2] = '\u8BC4\u4EF7(' + res.data.message.commentTotal + ')';

              case 5:
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

    // 点赞
    like: function like(comment) {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var res;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.t0 = comment.is_like;
                _context2.next = _context2.t0 === 1 ? 3 : _context2.t0 === 2 ? 5 : 7;
                break;

              case 3:
                comment.is_like = 2;
                return _context2.abrupt('break', 8);

              case 5:
                comment.is_like = 1;
                return _context2.abrupt('break', 8);

              case 7:
                return _context2.abrupt('break', 8);

              case 8:
                _context2.next = 10;
                return _this2.$axios.post('/comment/like', {
                  comment_id: comment.id,
                  is_like: comment.is_like
                });

              case 10:
                res = _context2.sent;

              case 11:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }))();
    },

    // 关注或是取消关注
    followOrUnFollow: function followOrUnFollow(is_follow, lecturer_id) {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee3() {
        var res1, res2;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.t0 = is_follow;
                _context3.next = _context3.t0 === 0 ? 3 : _context3.t0 === 1 ? 8 : 13;
                break;

              case 3:
                _context3.next = 5;
                return _this3.$axios.post('/lecturer/follow', {
                  lecturer_id: lecturer_id
                });

              case 5:
                res1 = _context3.sent;

                if (res1.data.status === 0) {
                  _this3.course_detail.lecturer.is_follow = 1;
                  wx.showToast({
                    title: res1.data.message, //提示的内容,
                    icon: 'none', //图标,
                    duration: 2000, //延迟时间,
                    mask: true //显示透明蒙层，防止触摸穿透
                  });
                }
                return _context3.abrupt('break', 14);

              case 8:
                _context3.next = 10;
                return _this3.$axios.post('/lecturer/unfollow', {
                  lecturer_id: lecturer_id
                });

              case 10:
                res2 = _context3.sent;

                if (res2.data.status === 0) {
                  _this3.course_detail.lecturer.is_follow = 0;
                  wx.showToast({
                    title: res2.data.message, //提示的内容,
                    icon: 'none', //图标,
                    duration: 2000, //延迟时间,
                    mask: true //显示透明蒙层，防止触摸穿透
                  });
                }
                return _context3.abrupt('break', 14);

              case 13:
                return _context3.abrupt('break', 14);

              case 14:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this3);
      }))();
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

/***/ 119:
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
  }), _vm._v(" "), _c('button', {
    staticClass: "share-button",
    attrs: {
      "open-type": "share",
      "plain": ""
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
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
    class: [_vm.course_detail.lecturer.is_follow === 1 ? 'follow' : 'unfollow'],
    attrs: {
      "eventid": '3'
    },
    on: {
      "click": function($event) {
        _vm.followOrUnFollow(_vm.course_detail.lecturer.is_follow, _vm.course_detail.lecturer.id)
      }
    }
  }, [_vm._v("\n            " + _vm._s(_vm.course_detail.lecturer.is_follow === 1 ? '已关注' : '关注') + "\n          ")])], 1) : _vm._e(), _vm._v(" "), (_vm.course_detail.lecturer) ? _c('div', {
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
    }, [_c('div', {
      staticStyle: {
        "margin-top": "12rpx"
      }
    }, [_vm._v(_vm._s(item.nickname))]), _vm._v("  \n                "), _c('div', [_c('star', {
      attrs: {
        "score": item.score,
        "mpcomid": '1_' + index
      }
    })], 1)]), _vm._v(" "), _c('div', [_vm._v("\n                " + _vm._s(item.content) + "\n              ")])]), _vm._v(" "), _c('p', {
      staticClass: "time"
    }, [_vm._v(_vm._s(item.comment_time))]), _c('p')], 1), _vm._v(" "), _c('div', {
      staticClass: "star"
    }, [_c('img', {
      attrs: {
        "src": item.is_like == 1 ? '/static/images/like_normal@2x.png' : '/static/images/like_highlight@2x.png',
        "alt": "",
        "eventid": '4_' + index
      },
      on: {
        "click": function($event) {
          _vm.like(item)
        }
      }
    })])])
  }), _vm._v(" "), (!_vm.course_detail.comments) ? _c('p', {
    staticStyle: {
      "color": "#636363",
      "font-size": "15px",
      "padding": "38rpx"
    }
  }, [_vm._v("\n          暂无评论哦，请学习之后再评价~\n        ")]) : _vm._e()], 2)])])]) : _vm._e()
}
var staticRenderFns = []
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

},[110]);