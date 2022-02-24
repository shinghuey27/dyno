"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./Label.css");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Description = function Description(props) {
  var label = props.label,
      descriptionStyle = props.descriptionStyle;
  return /*#__PURE__*/_react.default.createElement("label", _extends({}, descriptionStyle, props), label);
};

Description.defaultProps = {
  label: "Default Description",
  className: "description"
};
Description.propTypes = {
  label: _propTypes.default.string,
  className: _propTypes.default.string
};
var _default = Description;
exports.default = _default;