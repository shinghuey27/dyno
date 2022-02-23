"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./Label.css");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ErrorMessage = function ErrorMessage(props) {
  var name = props.name,
      item = props.item,
      error = props.error;
  if (error === undefined) return null;
  var errorMsg = error && error[name] && error[name].message || "default error";
  return /*#__PURE__*/_react.default.createElement("div", props, errorMsg);
};

ErrorMessage.defaultProps = {
  className: "errorMessage"
};
ErrorMessage.propTypes = {
  className: _propTypes.default.string
};
var _default = ErrorMessage;
exports.default = _default;