(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/mydetail/mydetail"],{

/***/ 41:
/*!*********************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/ChaoYingTrailer/ChaoYingTrailer/main.js?{"page":"pages%2Fmydetail%2Fmydetail"} ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);__webpack_require__(/*! @dcloudio/uni-stat */ 5);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _mydetail = _interopRequireDefault(__webpack_require__(/*! ./pages/mydetail/mydetail.vue */ 42));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_mydetail.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 42:
/*!**************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/ChaoYingTrailer/ChaoYingTrailer/pages/mydetail/mydetail.vue ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mydetail_vue_vue_type_template_id_7ce006e3_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mydetail.vue?vue&type=template&id=7ce006e3&scoped=true& */ 43);
/* harmony import */ var _mydetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mydetail.vue?vue&type=script&lang=js& */ 45);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _mydetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _mydetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _mydetail_vue_vue_type_style_index_0_id_7ce006e3_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mydetail.vue?vue&type=style&index=0&id=7ce006e3&scoped=true&lang=scss& */ 47);
/* harmony import */ var _AppData_Local_Temp_Rar$EXa0_440_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../AppData/Local/Temp/Rar$EXa0.440/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 14);






/* normalize component */

var component = Object(_AppData_Local_Temp_Rar$EXa0_440_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _mydetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _mydetail_vue_vue_type_template_id_7ce006e3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _mydetail_vue_vue_type_template_id_7ce006e3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7ce006e3",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "Desktop/ChaoYingTrailer/ChaoYingTrailer/pages/mydetail/mydetail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 43:
/*!*********************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/ChaoYingTrailer/ChaoYingTrailer/pages/mydetail/mydetail.vue?vue&type=template&id=7ce006e3&scoped=true& ***!
  \*********************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppData_Local_Temp_Rar$EXa0_440_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_AppData_Local_Temp_Rar$EXa0_440_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_AppData_Local_Temp_Rar$EXa0_440_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_AppData_Local_Temp_Rar$EXa0_440_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Local_Temp_Rar$EXa0_440_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_AppData_Local_Temp_Rar$EXa0_440_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_mydetail_vue_vue_type_template_id_7ce006e3_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../AppData/Local/Temp/Rar$EXa0.440/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../AppData/Local/Temp/Rar$EXa0.440/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../AppData/Local/Temp/Rar$EXa0.440/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../AppData/Local/Temp/Rar$EXa0.440/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../AppData/Local/Temp/Rar$EXa0.440/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../../AppData/Local/Temp/Rar$EXa0.440/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./mydetail.vue?vue&type=template&id=7ce006e3&scoped=true& */ 44);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _AppData_Local_Temp_Rar$EXa0_440_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_AppData_Local_Temp_Rar$EXa0_440_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_AppData_Local_Temp_Rar$EXa0_440_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_AppData_Local_Temp_Rar$EXa0_440_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Local_Temp_Rar$EXa0_440_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_AppData_Local_Temp_Rar$EXa0_440_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_mydetail_vue_vue_type_template_id_7ce006e3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _AppData_Local_Temp_Rar$EXa0_440_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_AppData_Local_Temp_Rar$EXa0_440_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_AppData_Local_Temp_Rar$EXa0_440_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_AppData_Local_Temp_Rar$EXa0_440_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Local_Temp_Rar$EXa0_440_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_AppData_Local_Temp_Rar$EXa0_440_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_mydetail_vue_vue_type_template_id_7ce006e3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 44:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Administrator/Desktop/ChaoYingTrailer/ChaoYingTrailer/pages/mydetail/mydetail.vue?vue&type=template&id=7ce006e3&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 45:
/*!***************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/ChaoYingTrailer/ChaoYingTrailer/pages/mydetail/mydetail.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppData_Local_Temp_Rar$EXa0_440_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_AppData_Local_Temp_Rar$EXa0_440_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_AppData_Local_Temp_Rar$EXa0_440_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_AppData_Local_Temp_Rar$EXa0_440_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Local_Temp_Rar$EXa0_440_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_AppData_Local_Temp_Rar$EXa0_440_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_mydetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../AppData/Local/Temp/Rar$EXa0.440/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../AppData/Local/Temp/Rar$EXa0.440/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../AppData/Local/Temp/Rar$EXa0.440/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../AppData/Local/Temp/Rar$EXa0.440/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../AppData/Local/Temp/Rar$EXa0.440/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../../AppData/Local/Temp/Rar$EXa0.440/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./mydetail.vue?vue&type=script&lang=js& */ 46);
/* harmony import */ var _AppData_Local_Temp_Rar$EXa0_440_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_AppData_Local_Temp_Rar$EXa0_440_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_AppData_Local_Temp_Rar$EXa0_440_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_AppData_Local_Temp_Rar$EXa0_440_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Local_Temp_Rar$EXa0_440_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_AppData_Local_Temp_Rar$EXa0_440_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_mydetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_AppData_Local_Temp_Rar$EXa0_440_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_AppData_Local_Temp_Rar$EXa0_440_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_AppData_Local_Temp_Rar$EXa0_440_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_AppData_Local_Temp_Rar$EXa0_440_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Local_Temp_Rar$EXa0_440_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_AppData_Local_Temp_Rar$EXa0_440_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_mydetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _AppData_Local_Temp_Rar$EXa0_440_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_AppData_Local_Temp_Rar$EXa0_440_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_AppData_Local_Temp_Rar$EXa0_440_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_AppData_Local_Temp_Rar$EXa0_440_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Local_Temp_Rar$EXa0_440_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_AppData_Local_Temp_Rar$EXa0_440_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_mydetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _AppData_Local_Temp_Rar$EXa0_440_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_AppData_Local_Temp_Rar$EXa0_440_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_AppData_Local_Temp_Rar$EXa0_440_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_AppData_Local_Temp_Rar$EXa0_440_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Local_Temp_Rar$EXa0_440_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_AppData_Local_Temp_Rar$EXa0_440_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_mydetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_AppData_Local_Temp_Rar$EXa0_440_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_AppData_Local_Temp_Rar$EXa0_440_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_AppData_Local_Temp_Rar$EXa0_440_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_AppData_Local_Temp_Rar$EXa0_440_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Local_Temp_Rar$EXa0_440_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_AppData_Local_Temp_Rar$EXa0_440_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_mydetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 46:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Administrator/Desktop/ChaoYingTrailer/ChaoYingTrailer/pages/mydetail/mydetail.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var uniPopup = function uniPopup() {return __webpack_require__.e(/*! import() | components/uni-ui/uni-popup/uni-popup */ "components/uni-ui/uni-popup/uni-popup").then(__webpack_require__.bind(null, /*! ../../components/uni-ui/uni-popup/uni-popup.vue */ 95));};var _default =













































{
  name: "",
  components: {
    uniPopup: uniPopup },

  props: {},
  data: function data() {
    return {
      userId: "",
      faceImage: "",
      nickname: "",
      birthday: "",
      sex: "",
      userUniqueToken: "" };

  },
  methods: {
    // 打开弹出层
    openPop: function openPop() {
      this.$refs.popup.open();
    },
    // 查看头像
    previewImage: function previewImage() {
      var arr = [];
      arr.push(this.faceImage);
      uni.previewImage({
        urls: arr });

    },
    // 从本地相册选择图片
    chooseImage: function chooseImage() {
      var that = this;
      uni.chooseImage({
        count: 1, //默认9
        sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album'], //从相册选择
        success: function success(res) {
          var tempFilePaths = res.tempFilePaths;
          uni.uploadFile({
            url: "".concat(that.$api, "/user/uploadFace?qq=122212489&userId=").concat(that.userId),
            filePath: tempFilePaths[0],
            name: 'file',
            header: {
              'headerUserId': that.userId,
              "headerUserToken": that.userUniqueToken },

            success: function success(uploadFileRes) {
              var user = JSON.parse(uploadFileRes.data);
              that.faceImage = user.data.faceImage;
              console.log(JSON.parse(uploadFileRes.data));
            } });

        } });

    },
    // 关闭弹出层
    closePop: function closePop() {
      this.$refs.popup.close();
    },
    // 去修改昵称
    goNickname: function goNickname() {
      uni.navigateTo({
        url: "/pages/setname/setname?name=".concat(this.nickname),
        success: function success(res) {},
        fail: function fail() {},
        complete: function complete() {} });

    },
    // 去修改生日
    goBirthday: function goBirthday() {
      uni.navigateTo({
        url: "/pages/setbirthday/setbirthday?birthday=".concat(this.birthday),
        success: function success(res) {},
        fail: function fail() {},
        complete: function complete() {} });

    },
    // 去修改性别
    goSex: function goSex() {
      uni.navigateTo({
        url: "/pages/setsex/setsex?sex=".concat(this.sex),
        success: function success(res) {},
        fail: function fail() {},
        complete: function complete() {} });

    },
    // 清除缓存
    clear: function clear() {
      uni.removeStorageSync('userInfo');
      this.$store.state.username = '';
      uni.showToast({
        title: '清除成功',
        duration: 2000 });

    },
    // 退出登录
    quit: function quit() {
      uni.request({
        url: "".concat(this.$api, "/user/logout?qq=122212489&userId=").concat(this.userId),
        method: 'POST',
        data: {},
        success: function success(res) {
          uni.switchTab({
            url: '/pages/mine/mine' });

          uni.removeStorageSync('username');
          console.log(res, '退出登录');
        },
        fail: function fail() {},
        complete: function complete() {} });

    } },

  mounted: function mounted() {

  },
  onLoad: function onLoad() {

  },
  onShow: function onShow() {
    var user = uni.getStorageSync('userInfo');
    this.userId = user.id;
    this.faceImage = user.faceImage;
    this.nickname = user.nickname;
    this.birthday = user.birthday;
    this.sex = user.sex,
    this.userUniqueToken = user.userUniqueToken;
  },
  filters: {},


  computed: {},


  watch: {},


  directives: {} };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 47:
/*!************************************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/ChaoYingTrailer/ChaoYingTrailer/pages/mydetail/mydetail.vue?vue&type=style&index=0&id=7ce006e3&scoped=true&lang=scss& ***!
  \************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppData_Local_Temp_Rar$EXa0_440_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_AppData_Local_Temp_Rar$EXa0_440_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_AppData_Local_Temp_Rar$EXa0_440_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_AppData_Local_Temp_Rar$EXa0_440_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Local_Temp_Rar$EXa0_440_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_AppData_Local_Temp_Rar$EXa0_440_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_AppData_Local_Temp_Rar$EXa0_440_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_AppData_Local_Temp_Rar$EXa0_440_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Local_Temp_Rar$EXa0_440_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_AppData_Local_Temp_Rar$EXa0_440_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_mydetail_vue_vue_type_style_index_0_id_7ce006e3_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../AppData/Local/Temp/Rar$EXa0.440/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../../AppData/Local/Temp/Rar$EXa0.440/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!../../../../../AppData/Local/Temp/Rar$EXa0.440/HBuilderX/plugins/uniapp-cli/node_modules/css-loader??ref--8-oneOf-1-2!../../../../../AppData/Local/Temp/Rar$EXa0.440/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../AppData/Local/Temp/Rar$EXa0.440/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../AppData/Local/Temp/Rar$EXa0.440/HBuilderX/plugins/uniapp-cli/node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-4!../../../../../AppData/Local/Temp/Rar$EXa0.440/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../AppData/Local/Temp/Rar$EXa0.440/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../AppData/Local/Temp/Rar$EXa0.440/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../../AppData/Local/Temp/Rar$EXa0.440/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./mydetail.vue?vue&type=style&index=0&id=7ce006e3&scoped=true&lang=scss& */ 48);
/* harmony import */ var _AppData_Local_Temp_Rar$EXa0_440_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_AppData_Local_Temp_Rar$EXa0_440_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_AppData_Local_Temp_Rar$EXa0_440_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_AppData_Local_Temp_Rar$EXa0_440_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Local_Temp_Rar$EXa0_440_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_AppData_Local_Temp_Rar$EXa0_440_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_AppData_Local_Temp_Rar$EXa0_440_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_AppData_Local_Temp_Rar$EXa0_440_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Local_Temp_Rar$EXa0_440_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_AppData_Local_Temp_Rar$EXa0_440_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_mydetail_vue_vue_type_style_index_0_id_7ce006e3_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_AppData_Local_Temp_Rar$EXa0_440_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_AppData_Local_Temp_Rar$EXa0_440_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_AppData_Local_Temp_Rar$EXa0_440_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_AppData_Local_Temp_Rar$EXa0_440_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Local_Temp_Rar$EXa0_440_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_AppData_Local_Temp_Rar$EXa0_440_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_AppData_Local_Temp_Rar$EXa0_440_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_AppData_Local_Temp_Rar$EXa0_440_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Local_Temp_Rar$EXa0_440_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_AppData_Local_Temp_Rar$EXa0_440_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_mydetail_vue_vue_type_style_index_0_id_7ce006e3_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _AppData_Local_Temp_Rar$EXa0_440_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_AppData_Local_Temp_Rar$EXa0_440_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_AppData_Local_Temp_Rar$EXa0_440_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_AppData_Local_Temp_Rar$EXa0_440_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Local_Temp_Rar$EXa0_440_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_AppData_Local_Temp_Rar$EXa0_440_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_AppData_Local_Temp_Rar$EXa0_440_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_AppData_Local_Temp_Rar$EXa0_440_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Local_Temp_Rar$EXa0_440_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_AppData_Local_Temp_Rar$EXa0_440_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_mydetail_vue_vue_type_style_index_0_id_7ce006e3_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _AppData_Local_Temp_Rar$EXa0_440_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_AppData_Local_Temp_Rar$EXa0_440_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_AppData_Local_Temp_Rar$EXa0_440_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_AppData_Local_Temp_Rar$EXa0_440_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Local_Temp_Rar$EXa0_440_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_AppData_Local_Temp_Rar$EXa0_440_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_AppData_Local_Temp_Rar$EXa0_440_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_AppData_Local_Temp_Rar$EXa0_440_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Local_Temp_Rar$EXa0_440_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_AppData_Local_Temp_Rar$EXa0_440_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_mydetail_vue_vue_type_style_index_0_id_7ce006e3_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_AppData_Local_Temp_Rar$EXa0_440_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_AppData_Local_Temp_Rar$EXa0_440_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_AppData_Local_Temp_Rar$EXa0_440_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_AppData_Local_Temp_Rar$EXa0_440_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Local_Temp_Rar$EXa0_440_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_AppData_Local_Temp_Rar$EXa0_440_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_AppData_Local_Temp_Rar$EXa0_440_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_AppData_Local_Temp_Rar$EXa0_440_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Local_Temp_Rar$EXa0_440_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_AppData_Local_Temp_Rar$EXa0_440_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_mydetail_vue_vue_type_style_index_0_id_7ce006e3_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 48:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!./node_modules/css-loader??ref--8-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Administrator/Desktop/ChaoYingTrailer/ChaoYingTrailer/pages/mydetail/mydetail.vue?vue&type=style&index=0&id=7ce006e3&scoped=true&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[[41,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/mydetail/mydetail.js.map