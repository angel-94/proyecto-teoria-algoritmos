webpackHotUpdate(0,{

/***/ 360:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(78), RootInstanceProvider = __webpack_require__(86), ReactMount = __webpack_require__(88), React = __webpack_require__(156); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {\n\n'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(156);\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n__webpack_require__(351);\n//require('styles/bootstrap/dist/css/bootstrap.css');\n//require('../../node_modules/bootstrap/dist/css/bootstrap.min.css');\n\nvar Entradas = function (_React$Component) {\n  _inherits(Entradas, _React$Component);\n\n  function Entradas(props) {\n    _classCallCheck(this, Entradas);\n\n    var _this = _possibleConstructorReturn(this, (Entradas.__proto__ || Object.getPrototypeOf(Entradas)).call(this, props));\n\n    _this.state = { value: '1' };\n    _this.handleChange = _this.handleChange.bind(_this);\n    //this.handleSubmit = this.handleSubmit.bind(this);\n    return _this;\n  }\n\n  _createClass(Entradas, [{\n    key: 'handleChange',\n    value: function handleChange(event) {\n      var valor = void 0;\n      valor = event.target.value;\n      this.setState({ value: event.target.value });\n      console.log('Hola mundo!' + valor);\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          'h2',\n          { className: 'center-block' },\n          'Datos de entrada para t\\xFA afd'\n        ),\n        _react2.default.createElement(\n          'div',\n          { className: 'form-group' },\n          _react2.default.createElement(\n            'label',\n            { 'for': '' },\n            'N\\xFAmero de estados (Q):'\n          ),\n          _react2.default.createElement(\n            'select',\n            { value: this.state.value, onChange: this.handleChange, className: 'form-control', name: '' },\n            _react2.default.createElement(\n              'option',\n              { value: '1' },\n              'q0'\n            ),\n            _react2.default.createElement(\n              'option',\n              { value: '2' },\n              'q1'\n            ),\n            _react2.default.createElement(\n              'option',\n              { value: '3' },\n              'q2'\n            ),\n            _react2.default.createElement(\n              'option',\n              { value: '4' },\n              'q3'\n            ),\n            _react2.default.createElement(\n              'option',\n              { value: '5' },\n              'q4'\n            ),\n            _react2.default.createElement(\n              'option',\n              { value: '6' },\n              'q5'\n            ),\n            _react2.default.createElement(\n              'option',\n              { value: '7' },\n              'q6'\n            ),\n            _react2.default.createElement(\n              'option',\n              { value: '8' },\n              'q7'\n            ),\n            _react2.default.createElement(\n              'option',\n              { value: '9' },\n              'q8'\n            ),\n            _react2.default.createElement(\n              'option',\n              { value: '10' },\n              'q9'\n            )\n          )\n        ),\n        _react2.default.createElement(\n          'div',\n          { className: 'form-group' },\n          _react2.default.createElement(\n            'label',\n            { 'for': '' },\n            'Elementos del alfabeto (\\u03A3):'\n          ),\n          _react2.default.createElement(\n            'select',\n            { className: 'form-control', name: '' },\n            _react2.default.createElement(\n              'option',\n              { value: '1' },\n              'a'\n            ),\n            _react2.default.createElement(\n              'option',\n              { value: '2' },\n              'b'\n            ),\n            _react2.default.createElement(\n              'option',\n              { value: '3' },\n              'c'\n            ),\n            _react2.default.createElement(\n              'option',\n              { value: '4' },\n              'd'\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return Entradas;\n}(_react2.default.Component);\n\nexports.default = Entradas;\n\n/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(355); if (makeExportsHot(module, __webpack_require__(156))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error(\"Cannot not apply hot update to \" + \"Entradas.js\" + \": \" + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9FbnRyYWRhcy5qcz9iMjc0Il0sIm5hbWVzIjpbInJlcXVpcmUiLCJFbnRyYWRhcyIsInByb3BzIiwic3RhdGUiLCJ2YWx1ZSIsImhhbmRsZUNoYW5nZSIsImJpbmQiLCJldmVudCIsInZhbG9yIiwidGFyZ2V0Iiwic2V0U3RhdGUiLCJjb25zb2xlIiwibG9nIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBR0E7Ozs7Ozs7Ozs7OztBQUhBLG1CQUFBQSxDQUFRLEdBQVI7QUFDQTtBQUNBOztJQUdxQkMsUTs7O0FBQ25CLG9CQUFZQyxLQUFaLEVBQWtCO0FBQUE7O0FBQUEsb0hBQ1ZBLEtBRFU7O0FBRWhCLFVBQUtDLEtBQUwsR0FBYSxFQUFDQyxPQUFPLEdBQVIsRUFBYjtBQUNBLFVBQUtDLFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQkMsSUFBbEIsT0FBcEI7QUFDQTtBQUpnQjtBQUtqQjs7OztpQ0FFWUMsSyxFQUFPO0FBQ2xCLFVBQUlDLGNBQUo7QUFDQUEsY0FBUUQsTUFBTUUsTUFBTixDQUFhTCxLQUFyQjtBQUNBLFdBQUtNLFFBQUwsQ0FBYyxFQUFDTixPQUFPRyxNQUFNRSxNQUFOLENBQWFMLEtBQXJCLEVBQWQ7QUFDQU8sY0FBUUMsR0FBUixDQUFZLGdCQUFnQkosS0FBNUI7QUFDRDs7OzZCQUVPO0FBQ04sYUFDRTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUEsWUFBSSxXQUFVLGNBQWQ7QUFBQTtBQUFBLFNBREo7QUFFTTtBQUFBO0FBQUEsWUFBSyxXQUFVLFlBQWY7QUFDRTtBQUFBO0FBQUEsY0FBTyxPQUFJLEVBQVg7QUFBQTtBQUFBLFdBREY7QUFFSTtBQUFBO0FBQUEsY0FBUSxPQUFPLEtBQUtMLEtBQUwsQ0FBV0MsS0FBMUIsRUFBaUMsVUFBVSxLQUFLQyxZQUFoRCxFQUE4RCxXQUFVLGNBQXhFLEVBQXVGLE1BQUssRUFBNUY7QUFDRTtBQUFBO0FBQUEsZ0JBQVEsT0FBTSxHQUFkO0FBQUE7QUFBQSxhQURGO0FBRUU7QUFBQTtBQUFBLGdCQUFRLE9BQU0sR0FBZDtBQUFBO0FBQUEsYUFGRjtBQUdFO0FBQUE7QUFBQSxnQkFBUSxPQUFNLEdBQWQ7QUFBQTtBQUFBLGFBSEY7QUFJRTtBQUFBO0FBQUEsZ0JBQVEsT0FBTSxHQUFkO0FBQUE7QUFBQSxhQUpGO0FBS0U7QUFBQTtBQUFBLGdCQUFRLE9BQU0sR0FBZDtBQUFBO0FBQUEsYUFMRjtBQU1FO0FBQUE7QUFBQSxnQkFBUSxPQUFNLEdBQWQ7QUFBQTtBQUFBLGFBTkY7QUFPRTtBQUFBO0FBQUEsZ0JBQVEsT0FBTSxHQUFkO0FBQUE7QUFBQSxhQVBGO0FBUUU7QUFBQTtBQUFBLGdCQUFRLE9BQU0sR0FBZDtBQUFBO0FBQUEsYUFSRjtBQVNFO0FBQUE7QUFBQSxnQkFBUSxPQUFNLEdBQWQ7QUFBQTtBQUFBLGFBVEY7QUFVRTtBQUFBO0FBQUEsZ0JBQVEsT0FBTSxJQUFkO0FBQUE7QUFBQTtBQVZGO0FBRkosU0FGTjtBQWlCTTtBQUFBO0FBQUEsWUFBSyxXQUFVLFlBQWY7QUFDRTtBQUFBO0FBQUEsY0FBTyxPQUFJLEVBQVg7QUFBQTtBQUFBLFdBREY7QUFFSTtBQUFBO0FBQUEsY0FBUSxXQUFVLGNBQWxCLEVBQWlDLE1BQUssRUFBdEM7QUFDRTtBQUFBO0FBQUEsZ0JBQVEsT0FBTSxHQUFkO0FBQUE7QUFBQSxhQURGO0FBRUU7QUFBQTtBQUFBLGdCQUFRLE9BQU0sR0FBZDtBQUFBO0FBQUEsYUFGRjtBQUdFO0FBQUE7QUFBQSxnQkFBUSxPQUFNLEdBQWQ7QUFBQTtBQUFBLGFBSEY7QUFJRTtBQUFBO0FBQUEsZ0JBQVEsT0FBTSxHQUFkO0FBQUE7QUFBQTtBQUpGO0FBRko7QUFqQk4sT0FERjtBQTZCRDs7OztFQTdDbUMsZ0JBQU1RLFM7O2tCQUF2QlosUSIsImZpbGUiOiIzNjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJyZXF1aXJlKCdub3JtYWxpemUuY3NzL25vcm1hbGl6ZS5jc3MnKTtcbi8vcmVxdWlyZSgnc3R5bGVzL2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAuY3NzJyk7XG4vL3JlcXVpcmUoJy4uLy4uL25vZGVfbW9kdWxlcy9ib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnKTtcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVudHJhZGFzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7dmFsdWU6ICcxJ307XG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIC8vdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgaGFuZGxlQ2hhbmdlKGV2ZW50KSB7XG4gICAgbGV0IHZhbG9yO1xuICAgIHZhbG9yID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgIHRoaXMuc2V0U3RhdGUoe3ZhbHVlOiBldmVudC50YXJnZXQudmFsdWV9KTtcbiAgICBjb25zb2xlLmxvZygnSG9sYSBtdW5kbyEnICsgdmFsb3IpO1xuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuKFxuICAgICAgPGRpdj5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiY2VudGVyLWJsb2NrXCI+RGF0b3MgZGUgZW50cmFkYSBwYXJhIHQmdWFjdXRlOyBhZmQ8L2gyPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJcIj5OJnVhY3V0ZTttZXJvIGRlIGVzdGFkb3MgKFEpOjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPHNlbGVjdCB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiXCI+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMVwiPnEwPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMlwiPnExPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiM1wiPnEyPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNFwiPnEzPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNVwiPnE0PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNlwiPnE1PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiN1wiPnE2PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiOFwiPnE3PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiOVwiPnE4PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMTBcIj5xOTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIlwiPkVsZW1lbnRvcyBkZWwgYWxmYWJldG8gKCZTaWdtYTspOjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiXCI+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMVwiPmE8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyXCI+Yjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjNcIj5jPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNFwiPmQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvRW50cmFkYXMuanMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ }

})