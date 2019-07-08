require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([4],{

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_vue__ = __webpack_require__(158);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index_vue__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_2b7c9040_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(161);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(159)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2b7c9040"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_2b7c9040_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\play\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2b7c9040", Component.options)
  } else {
    hotAPI.reload("data-v-2b7c9040", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 159:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Star__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Modal__ = __webpack_require__(48);



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
    Star: __WEBPACK_IMPORTED_MODULE_3__components_Star__["a" /* default */],
    Modal: __WEBPACK_IMPORTED_MODULE_4__components_Modal__["a" /* default */]
  },
  data: function data() {
    return {
      course_id: null, // 课程id
      course_title: null, // 课程标题
      course_price: null, // 课程价格
      video_url: null,
      course_detail: null, // 课程详情数据
      playIndex: 0, // 正在播放视频的索引
      isValidateRight: false, // 是否校验过权限
      isShowCommentModal: false, // 是否显示评论框
      score: 0, // 评论的分数
      content: '' // 评论的内容
    };
  },

  computed: {
    level: function level() {
      var levelName = "初级";

      if (this.course_detail) {
        var level = this.course_detail.course.level;
        switch (level) {
          case 1:
            levelName = "初级";
            break;

          case 2:
            levelName = "中级";
            break;

          case 3:
            levelName = "高级";
            break;

          default:
            break;
        }
      }

      return levelName;
    }
  },
  onLoad: function onLoad(options) {
    this.course_id = options.id;
    this.course_title = options.title;
    this.course_price = options.price;
    this.getCourseDetailData(options.id);
  },

  methods: {
    getCourseDetailData: function getCourseDetailData(id) {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee() {
        var res;
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.$axios.get('course/play/' + id);

              case 2:
                res = _context.sent;


                _this.course_detail = res.data.message;
                _this.video_url = _this.course_detail.videos[0].video_url;

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },

    // 播放某一条视频
    playOneVideo: function playOneVideo(item, currentIndex) {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var isCanPlay, videoContext, res;
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                // 设置正在播放的索引
                _this2.playIndex = currentIndex;

                _context2.next = 3;
                return _this2.validatePlayRight();

              case 3:
                isCanPlay = _context2.sent;

                if (isCanPlay) {
                  _context2.next = 6;
                  break;
                }

                return _context2.abrupt('return');

              case 6:
                videoContext = wx.createVideoContext('myVideo');


                _this2.video_url = item.video_url;
                // 播放当前选中的
                setTimeout(function () {
                  videoContext.play();
                }, 200);

                // 记录学习进度
                _context2.next = 11;
                return _this2.$axios.post('/study/video', {
                  course_id: _this2.course_id,
                  video_id: item.id
                });

              case 11:
                res = _context2.sent;


                if (res.data.status === 0) {
                  item.is_study = 1;
                }

              case 13:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }))();
    },

    // 当视频播放的时候
    onVideoPlay: function onVideoPlay() {
      if (!this.isValidateRight) {
        this.validatePlayRight();
      }
    },

    // 校验播放权限
    validatePlayRight: function validatePlayRight() {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee3() {
        var res;
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _this3.$axios.get('/order/paystatus?course_id=' + _this3.course_id);

              case 2:
                res = _context3.sent;

                if (!(res.data.pay_status === 0)) {
                  _context3.next = 9;
                  break;
                }

                wx.createVideoContext('myVideo').pause();

                wx.showModal({
                  title: '提示',
                  content: '您还没有支付，请先支付后，再来观看哦~', //提示的内容,
                  showCancel: true, //是否显示取消按钮,
                  confirmText: '去支付', //确定按钮的文字，默认为取消，最多 4 个字符,
                  confirmColor: '#ff8d44', //确定按钮的文字颜色
                  success: function success(res) {
                    if (res.confirm) {
                      wx.navigateTo({ url: '/pages/pay/main?course_id=' + _this3.course_id + '&course_title=' + _this3.course_title + '&course_price=' + _this3.course_price });
                    }
                  }
                });

                return _context3.abrupt('return', new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
                  resolve(false);
                }));

              case 9:
                _this3.isValidateRight = true;
                return _context3.abrupt('return', new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
                  resolve(true);
                }));

              case 11:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this3);
      }))();
    },

    // 评价
    evaluate: function evaluate() {
      var _this4 = this;

      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee4() {
        var res;
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _this4.$axios.get('/study/complete', {
                  params: {
                    course_id: _this4.course_id
                  }
                });

              case 2:
                res = _context4.sent;


                if (res.data.complete) {
                  // 学习完毕了
                  _this4.isShowCommentModal = true;
                } else {
                  wx.showModal({
                    title: '评论失败', //提示的标题,
                    content: '需要学习完课程内容才能评价哦~', //提示的内容,
                    showCancel: false, //是否显示取消按钮,
                    confirmText: '确定', //确定按钮的文字，默认为取消，最多 4 个字符,
                    confirmColor: '#ff8d44' //确定按钮的文字颜色
                  });
                }

              case 4:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, _this4);
      }))();
    },

    // 关闭模态框
    closeModal: function closeModal() {
      this.isShowCommentModal = false;
    },

    // 获取选中的评论分数
    getChangeSocre: function getChangeSocre(score) {
      this.score = score;
    },

    // 提交评论
    postComment: function postComment() {
      var _this5 = this;

      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee5() {
        var res;
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return _this5.$axios.post('/comment/create', {
                  course_id: _this5.course_id,
                  content: _this5.content,
                  score: _this5.score
                });

              case 2:
                res = _context5.sent;


                if (res.data.status === 0) {
                  _this5.closeModal();
                  wx.showToast({
                    title: '评价成功', //提示的内容,
                    icon: 'success', //图标,
                    duration: 2000, //延迟时间,
                    mask: true //显示透明蒙层，防止触摸穿透
                  });
                }

              case 4:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, _this5);
      }))();
    }
  }
});

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.course_detail) ? _c('div', {
    staticClass: "play-container"
  }, [_c('div', {
    staticClass: "cover_image"
  }, [_c('video', {
    attrs: {
      "id": "myVideo",
      "src": _vm.video_url,
      "controls": "",
      "eventid": '0'
    },
    on: {
      "play": _vm.onVideoPlay
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "introduction"
  }, [_c('div', {
    staticClass: "title-and-info"
  }, [_c('p', {
    staticClass: "title"
  }, [_vm._v(_vm._s(_vm.course_detail.course.title))]), _vm._v(" "), _c('p', {
    staticClass: "info"
  }, [_c('span', [_vm._v(_vm._s(_vm.course_detail.course.study_count) + "人学过")]), _vm._v(" "), _c('span', [_vm._v("难度:" + _vm._s(_vm.level))]), _vm._v(" "), _c('span', [_vm._v("时长:" + _vm._s(_vm.course_detail.course.course_duration))])])], 1), _vm._v(" "), _c('div', {
    staticClass: "comment"
  }, [_c('img', {
    attrs: {
      "src": "/static/images/evaluate@2x.png",
      "alt": "",
      "eventid": '1'
    },
    on: {
      "click": _vm.evaluate
    }
  })]), _vm._v(" "), _c('Modal', {
    attrs: {
      "visible": _vm.isShowCommentModal,
      "eventid": '4',
      "mpcomid": '1'
    },
    on: {
      "postComment": _vm.postComment,
      "close": _vm.closeModal
    }
  }, [_c('div', {
    staticClass: "comment-content"
  }, [_c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.content),
      expression: "content"
    }],
    attrs: {
      "placeholder": "请输入评论内容哦~",
      "rows": "5",
      "eventid": '2'
    },
    domProps: {
      "value": (_vm.content)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.content = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticStyle: {
      "margin-top": "10rpx"
    }
  }, [_c('span', [_vm._v("评分：")]), _vm._v(" "), _c('div', {
    staticStyle: {
      "float": "right",
      "margin-right": "300rpx",
      "margin-top": "-5rpx"
    }
  }, [_c('Star', {
    attrs: {
      "readonly": false,
      "eventid": '3',
      "mpcomid": '0'
    },
    on: {
      "changeScore": _vm.getChangeSocre
    }
  })], 1)])])], 1), _vm._v(" "), _c('div', {
    staticClass: "course-progress"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("课程进度")]), _vm._v(" "), _c('div', {
    staticClass: "catelog-container"
  }, _vm._l((_vm.course_detail.videos), function(item, index) {
    return _c('p', {
      key: item.id,
      attrs: {
        "eventid": '5_' + index
      },
      on: {
        "click": function($event) {
          _vm.playOneVideo(item, index)
        }
      }
    }, [_c('span', {
      class: {
        'active': index === _vm.playIndex
      }
    }, [_vm._v(_vm._s(index + 1) + "." + _vm._s(item.name))]), _vm._v(" "), (item.is_study == 1) ? _c('span', {
      staticClass: "studied"
    }, [_vm._v("已学习")]) : _c('span', {
      class: ['time', index === _vm.playIndex ? 'active' : '']
    }, [_vm._v(_vm._s(item.duration))])])
  }))])]) : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2b7c9040", esExports)
  }
}

/***/ })

},[157]);