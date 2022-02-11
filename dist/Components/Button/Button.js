"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./Button.css");

require("../../index.css");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Button = function Button(props) {
  var disabled = props.disabled,
      label = props.label;
  var className = disabled ? 'button-disabled' : 'button';
  return /*#__PURE__*/React.createElement("button", _extends({
    className: className,
    disabled: disabled
  }, props), label);
};

Button.defaultProps = {
  label: 'Next',
  disabled: false
};
Button.propTypes = {
  label: _propTypes.default.string.isRequired,
  onClick: _propTypes.default.func,
  onMouseOver: _propTypes.default.func,
  disabled: _propTypes.default.bool
};
var _default = Button;
exports.default = _default;