webpackHotUpdate(0,{

/***/ 355:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(78), RootInstanceProvider = __webpack_require__(86), ReactMount = __webpack_require__(88), React = __webpack_require__(156); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {\n\n'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(156);\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n__webpack_require__(356);\n\nvar Entradas = function (_React$Component) {\n  _inherits(Entradas, _React$Component);\n\n  function Entradas(props) {\n    _classCallCheck(this, Entradas);\n\n    var _this = _possibleConstructorReturn(this, (Entradas.__proto__ || Object.getPrototypeOf(Entradas)).call(this, props));\n\n    _this.state = { value: 'B' };\n    _this.handleChange = _this.handleChange.bind(_this);\n    _this.handleSubmit = _this.handleSubmit.bind(_this);\n    return _this;\n  }\n\n  _createClass(Entradas, [{\n    key: 'handleChange',\n    value: function handleChange(event) {\n      this.setState({ value: event.target.value });\n    }\n  }, {\n    key: 'handleSubmit',\n    value: function handleSubmit(event) {\n      alert('Select value is: ' + this.state.value);\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        { className: '' },\n        _react2.default.createElement(\n          'h1',\n          null,\n          'Datos de entrada para t\\xFA afd yess'\n        ),\n        _react2.default.createElement(\n          'form',\n          { className: '', action: 'index.html', method: 'post' },\n          _react2.default.createElement(\n            'div',\n            { className: 'form-group' },\n            _react2.default.createElement(\n              'label',\n              { 'for': '' },\n              'N\\xFAmero de estados (Q):'\n            ),\n            _react2.default.createElement(\n              'select',\n              { value: this.state.value, onChange: this.handleChange, className: '', name: '' },\n              _react2.default.createElement(\n                'option',\n                { value: '' },\n                'Seleccione'\n              ),\n              _react2.default.createElement(\n                'option',\n                { value: '1' },\n                'q0'\n              ),\n              _react2.default.createElement(\n                'option',\n                { value: '2' },\n                'q1'\n              ),\n              _react2.default.createElement(\n                'option',\n                { value: '3' },\n                'q2'\n              ),\n              _react2.default.createElement(\n                'option',\n                { value: '4' },\n                'q3'\n              ),\n              _react2.default.createElement(\n                'option',\n                { value: '5' },\n                'q4'\n              ),\n              _react2.default.createElement(\n                'option',\n                { value: '6' },\n                'q5'\n              ),\n              _react2.default.createElement(\n                'option',\n                { value: '7' },\n                'q6'\n              ),\n              _react2.default.createElement(\n                'option',\n                { value: '8' },\n                'q7'\n              ),\n              _react2.default.createElement(\n                'option',\n                { value: '9' },\n                'q8'\n              ),\n              _react2.default.createElement(\n                'option',\n                { value: '10' },\n                'q9'\n              )\n            ),\n            _react2.default.createElement(\n              'p',\n              { 'class': 'help-block' },\n              'Help text here.'\n            )\n          ),\n          _react2.default.createElement(\n            'div',\n            { className: 'form-group' },\n            _react2.default.createElement(\n              'label',\n              { 'for': '' },\n              'Elementos del alfabeto (Sigma):'\n            ),\n            _react2.default.createElement(\n              'select',\n              { 'class': '', name: '' },\n              _react2.default.createElement(\n                'option',\n                { value: '' },\n                'Seleccione'\n              ),\n              _react2.default.createElement(\n                'option',\n                { value: '1' },\n                'a'\n              ),\n              _react2.default.createElement(\n                'option',\n                { value: '2' },\n                'b'\n              ),\n              _react2.default.createElement(\n                'option',\n                { value: '3' },\n                'c'\n              ),\n              _react2.default.createElement(\n                'option',\n                { value: '4' },\n                'd'\n              )\n            ),\n            _react2.default.createElement(\n              'p',\n              { 'class': 'help-block' },\n              'Help text here.'\n            )\n          )\n        ),\n        _react2.default.createElement(\n          'div',\n          null,\n          _react2.default.createElement(\n            'select',\n            { value: this.state.value, onChange: this.handleChange },\n            _react2.default.createElement(\n              'option',\n              { value: 'A' },\n              'Apple'\n            ),\n            _react2.default.createElement(\n              'option',\n              { value: 'B' },\n              'Banana'\n            ),\n            _react2.default.createElement(\n              'option',\n              { value: 'C' },\n              'Cranberry'\n            )\n          ),\n          _react2.default.createElement(\n            'button',\n            { onClick: this.handleSubmit },\n            'Submit'\n          )\n        )\n      );\n    }\n  }]);\n\n  return Entradas;\n}(_react2.default.Component);\n\nexports.default = Entradas;\n\n/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(351); if (makeExportsHot(module, __webpack_require__(156))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error(\"Cannot not apply hot update to \" + \"Entradas.js\" + \": \" + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9FbnRyYWRhcy5qcz9iMjc0Il0sIm5hbWVzIjpbInJlcXVpcmUiLCJFbnRyYWRhcyIsInByb3BzIiwic3RhdGUiLCJ2YWx1ZSIsImhhbmRsZUNoYW5nZSIsImJpbmQiLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsInNldFN0YXRlIiwidGFyZ2V0IiwiYWxlcnQiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBREEsbUJBQUFBLENBQVEsR0FBUjs7SUFHcUJDLFE7OztBQUNuQixvQkFBWUMsS0FBWixFQUFrQjtBQUFBOztBQUFBLG9IQUNWQSxLQURVOztBQUVoQixVQUFLQyxLQUFMLEdBQWEsRUFBQ0MsT0FBTyxHQUFSLEVBQWI7QUFDQSxVQUFLQyxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JDLElBQWxCLE9BQXBCO0FBQ0EsVUFBS0MsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCRCxJQUFsQixPQUFwQjtBQUpnQjtBQUtqQjs7OztpQ0FFWUUsSyxFQUFPO0FBQ2xCLFdBQUtDLFFBQUwsQ0FBYyxFQUFDTCxPQUFPSSxNQUFNRSxNQUFOLENBQWFOLEtBQXJCLEVBQWQ7QUFDRDs7O2lDQUVZSSxLLEVBQU87QUFDbEJHLFlBQU0sc0JBQXNCLEtBQUtSLEtBQUwsQ0FBV0MsS0FBdkM7QUFDRDs7OzZCQUVPO0FBQ04sYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLEVBQWY7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREY7QUFFSTtBQUFBO0FBQUEsWUFBTSxXQUFVLEVBQWhCLEVBQW1CLFFBQU8sWUFBMUIsRUFBdUMsUUFBTyxNQUE5QztBQUNFO0FBQUE7QUFBQSxjQUFLLFdBQVUsWUFBZjtBQUNFO0FBQUE7QUFBQSxnQkFBTyxPQUFJLEVBQVg7QUFBQTtBQUFBLGFBREY7QUFFSTtBQUFBO0FBQUEsZ0JBQVEsT0FBTyxLQUFLRCxLQUFMLENBQVdDLEtBQTFCLEVBQWlDLFVBQVUsS0FBS0MsWUFBaEQsRUFBOEQsV0FBVSxFQUF4RSxFQUEyRSxNQUFLLEVBQWhGO0FBQ0U7QUFBQTtBQUFBLGtCQUFRLE9BQU0sRUFBZDtBQUFBO0FBQUEsZUFERjtBQUVFO0FBQUE7QUFBQSxrQkFBUSxPQUFNLEdBQWQ7QUFBQTtBQUFBLGVBRkY7QUFHRTtBQUFBO0FBQUEsa0JBQVEsT0FBTSxHQUFkO0FBQUE7QUFBQSxlQUhGO0FBSUU7QUFBQTtBQUFBLGtCQUFRLE9BQU0sR0FBZDtBQUFBO0FBQUEsZUFKRjtBQUtFO0FBQUE7QUFBQSxrQkFBUSxPQUFNLEdBQWQ7QUFBQTtBQUFBLGVBTEY7QUFNRTtBQUFBO0FBQUEsa0JBQVEsT0FBTSxHQUFkO0FBQUE7QUFBQSxlQU5GO0FBT0U7QUFBQTtBQUFBLGtCQUFRLE9BQU0sR0FBZDtBQUFBO0FBQUEsZUFQRjtBQVFFO0FBQUE7QUFBQSxrQkFBUSxPQUFNLEdBQWQ7QUFBQTtBQUFBLGVBUkY7QUFTRTtBQUFBO0FBQUEsa0JBQVEsT0FBTSxHQUFkO0FBQUE7QUFBQSxlQVRGO0FBVUU7QUFBQTtBQUFBLGtCQUFRLE9BQU0sR0FBZDtBQUFBO0FBQUEsZUFWRjtBQVdFO0FBQUE7QUFBQSxrQkFBUSxPQUFNLElBQWQ7QUFBQTtBQUFBO0FBWEYsYUFGSjtBQWVFO0FBQUE7QUFBQSxnQkFBRyxTQUFNLFlBQVQ7QUFBQTtBQUFBO0FBZkYsV0FERjtBQWtCRTtBQUFBO0FBQUEsY0FBSyxXQUFVLFlBQWY7QUFDRTtBQUFBO0FBQUEsZ0JBQU8sT0FBSSxFQUFYO0FBQUE7QUFBQSxhQURGO0FBRUk7QUFBQTtBQUFBLGdCQUFRLFNBQU0sRUFBZCxFQUFpQixNQUFLLEVBQXRCO0FBQ0U7QUFBQTtBQUFBLGtCQUFRLE9BQU0sRUFBZDtBQUFBO0FBQUEsZUFERjtBQUVFO0FBQUE7QUFBQSxrQkFBUSxPQUFNLEdBQWQ7QUFBQTtBQUFBLGVBRkY7QUFHRTtBQUFBO0FBQUEsa0JBQVEsT0FBTSxHQUFkO0FBQUE7QUFBQSxlQUhGO0FBSUU7QUFBQTtBQUFBLGtCQUFRLE9BQU0sR0FBZDtBQUFBO0FBQUEsZUFKRjtBQUtFO0FBQUE7QUFBQSxrQkFBUSxPQUFNLEdBQWQ7QUFBQTtBQUFBO0FBTEYsYUFGSjtBQVNFO0FBQUE7QUFBQSxnQkFBRyxTQUFNLFlBQVQ7QUFBQTtBQUFBO0FBVEY7QUFsQkYsU0FGSjtBQWdDSTtBQUFBO0FBQUE7QUFDRjtBQUFBO0FBQUEsY0FBUSxPQUFPLEtBQUtGLEtBQUwsQ0FBV0MsS0FBMUIsRUFBaUMsVUFBVSxLQUFLQyxZQUFoRDtBQUNFO0FBQUE7QUFBQSxnQkFBUSxPQUFNLEdBQWQ7QUFBQTtBQUFBLGFBREY7QUFFRTtBQUFBO0FBQUEsZ0JBQVEsT0FBTSxHQUFkO0FBQUE7QUFBQSxhQUZGO0FBR0U7QUFBQTtBQUFBLGdCQUFRLE9BQU0sR0FBZDtBQUFBO0FBQUE7QUFIRixXQURFO0FBTUY7QUFBQTtBQUFBLGNBQVEsU0FBUyxLQUFLRSxZQUF0QjtBQUFBO0FBQUE7QUFORTtBQWhDSixPQURGO0FBMkNEOzs7O0VBNURtQyxnQkFBTUssUzs7a0JBQXZCWCxRIiwiZmlsZSI6IjM1NS5qcyIsInNvdXJjZXNDb250ZW50IjpbInJlcXVpcmUoJ25vcm1hbGl6ZS5jc3Mvbm9ybWFsaXplLmNzcycpO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW50cmFkYXMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHt2YWx1ZTogJ0InfTtcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgaGFuZGxlQ2hhbmdlKGV2ZW50KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7dmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZX0pO1xuICB9XG5cbiAgaGFuZGxlU3VibWl0KGV2ZW50KSB7XG4gICAgYWxlcnQoJ1NlbGVjdCB2YWx1ZSBpczogJyArIHRoaXMuc3RhdGUudmFsdWUpO1xuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgPGgxPkRhdG9zIGRlIGVudHJhZGEgcGFyYSB0JnVhY3V0ZTsgYWZkIHllc3M8L2gxPlxuICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cIlwiIGFjdGlvbj1cImluZGV4Lmh0bWxcIiBtZXRob2Q9XCJwb3N0XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIlwiPk4mdWFjdXRlO21lcm8gZGUgZXN0YWRvcyAoUSk6PC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8c2VsZWN0IHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IGNsYXNzTmFtZT1cIlwiIG5hbWU9XCJcIj5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5TZWxlY2Npb25lPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMVwiPnEwPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMlwiPnExPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiM1wiPnEyPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNFwiPnEzPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNVwiPnE0PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNlwiPnE1PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiN1wiPnE2PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiOFwiPnE3PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiOVwiPnE4PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMTBcIj5xOTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICA8cCBjbGFzcz1cImhlbHAtYmxvY2tcIj5IZWxwIHRleHQgaGVyZS48L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiXCI+RWxlbWVudG9zIGRlbCBhbGZhYmV0byAoU2lnbWEpOjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cIlwiIG5hbWU9XCJcIj5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5TZWxlY2Npb25lPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMVwiPmE8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyXCI+Yjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjNcIj5jPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNFwiPmQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgPHAgY2xhc3M9XCJoZWxwLWJsb2NrXCI+SGVscCB0ZXh0IGhlcmUuPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgIDxzZWxlY3QgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkFcIj5BcHBsZTwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJCXCI+QmFuYW5hPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkNcIj5DcmFuYmVycnk8L29wdGlvbj5cbiAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVTdWJtaXR9PlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9FbnRyYWRhcy5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

})