function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var PropTypes = _interopDefault(require('prop-types'));

var Button = function Button(_ref) {
  var title = _ref.title,
      disabled = _ref.disabled,
      event = _ref.event,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'default' : _ref$type,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'md' : _ref$size;
  return /*#__PURE__*/React.createElement("button", {
    className: type + " " + size,
    onClick: function onClick(e) {
      return event(e);
    },
    disabled: disabled
  }, title);
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  event: PropTypes.func,
  type: PropTypes.oneOf(['default', 'primary', 'secundary']),
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg'])
};

var CheckButton = function CheckButton(_ref) {
  var id = _ref.id,
      label = _ref.label,
      required = _ref.required,
      disabled = _ref.disabled,
      checked = _ref.checked,
      eventChange = _ref.eventChange,
      _ref$ref = _ref.ref,
      ref = _ref$ref === void 0 ? null : _ref$ref;
  return /*#__PURE__*/React.createElement("div", {
    className: "checkbutton"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    id: id,
    name: id,
    required: required,
    disabled: disabled,
    checked: checked,
    onChange: function onChange(e) {
      return eventChange(e);
    },
    ref: ref
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: id
  }, label));
};

CheckButton.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  checked: PropTypes.bool.isRequired,
  eventChange: PropTypes.func.isRequired
};

var RadioButton = function RadioButton(_ref) {
  var id = _ref.id,
      name = _ref.name,
      label = _ref.label,
      disabled = _ref.disabled,
      required = _ref.required,
      value = _ref.value,
      eventChange = _ref.eventChange,
      _ref$ref = _ref.ref,
      ref = _ref$ref === void 0 ? null : _ref$ref;
  return /*#__PURE__*/React.createElement("div", {
    className: "radiobutton"
  }, /*#__PURE__*/React.createElement("input", {
    type: "radio",
    id: id,
    name: name,
    required: required,
    disabled: disabled,
    value: value,
    checked: id === value,
    onChange: function onChange(e) {
      return eventChange(e);
    },
    ref: ref
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: id
  }, label));
};

RadioButton.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  value: PropTypes.string,
  eventChange: PropTypes.func.isRequired
};

var Selector = function Selector(_ref) {
  var id = _ref.id,
      titleTop = _ref.titleTop,
      titleBottom = _ref.titleBottom,
      value = _ref.value,
      required = _ref.required,
      disabled = _ref.disabled,
      eventChange = _ref.eventChange,
      _ref$options = _ref.options,
      options = _ref$options === void 0 ? [] : _ref$options,
      _ref$ref = _ref.ref,
      ref = _ref$ref === void 0 ? null : _ref$ref;

  var _onChange = function onChange(e) {
    if (eventChange && !disabled) {
      eventChange(e);
    }
  };

  var style = function style() {
    if (disabled) {
      return "disabled";
    } else if (required) {
      return "required";
    } else {
      return "";
    }
  };

  var validate = function validate(newValue, initialValue) {
    if (newValue === undefined || newValue === null) {
      return initialValue;
    } else {
      return newValue;
    }
  };

  return /*#__PURE__*/React.createElement("div", {
    className: 'control-container '
  }, /*#__PURE__*/React.createElement("div", {
    className: style()
  }, /*#__PURE__*/React.createElement("span", {
    htmlFor: id
  }, titleTop), /*#__PURE__*/React.createElement("select", {
    id: id,
    name: id,
    value: value,
    onChange: function onChange(e) {
      return _onChange(e);
    },
    autoComplete: "off",
    disabled: disabled,
    ref: ref
  }, /*#__PURE__*/React.createElement("option", {
    value: ''
  }, titleBottom), options.map(function (element) {
    return /*#__PURE__*/React.createElement("option", {
      key: validate(element.key, element.value),
      value: validate(element.key, element.value)
    }, element.value);
  })), /*#__PURE__*/React.createElement("span", {
    htmlFor: id
  }, titleBottom)));
};

Selector.propTypes = {
  id: PropTypes.string.isRequired,
  titleTop: PropTypes.string,
  titleBottom: PropTypes.string,
  value: PropTypes.string.isRequired,
  eventChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    key: PropTypes.string
  }))
};

var Spinner = function Spinner() {
  return /*#__PURE__*/React.createElement("div", {
    className: "container-load"
  }, /*#__PURE__*/React.createElement("div", {
    className: "loading"
  }));
};

var TextBox = function TextBox(_ref) {
  var id = _ref.id,
      titleTop = _ref.titleTop,
      placeholder = _ref.placeholder,
      titleBottom = _ref.titleBottom,
      value = _ref.value,
      required = _ref.required,
      disabled = _ref.disabled,
      readOnly = _ref.readOnly,
      noPaste = _ref.noPaste,
      noCopy = _ref.noCopy,
      size = _ref.size,
      eventChange = _ref.eventChange,
      eventFocus = _ref.eventFocus,
      eventBlur = _ref.eventBlur,
      eventKeyDown = _ref.eventKeyDown,
      _ref$ref = _ref.ref,
      ref = _ref$ref === void 0 ? null : _ref$ref;

  var _onChange = function onChange(e) {
    if (eventChange && !disabled) eventChange(e);
  };

  var _onFocus = function onFocus(e) {
    if (eventFocus && !disabled && !readOnly) eventFocus(e);
  };

  var _onBlur = function onBlur(e) {
    if (eventBlur && !disabled && !readOnly) eventBlur(e);
  };

  var _onKeyDown = function onKeyDown(e) {
    if (e.key === 'Enter') e.preventDefault();else if (eventKeyDown && !disabled && !readOnly) eventKeyDown(e);
  };

  var style = function style() {
    if (disabled) {
      return "disabled";
    } else if (required) {
      return "required";
    } else {
      return "";
    }
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "control-container "
  }, /*#__PURE__*/React.createElement("div", {
    className: style()
  }, /*#__PURE__*/React.createElement("span", {
    htmlFor: id
  }, titleTop), /*#__PURE__*/React.createElement("input", {
    type: "search",
    id: id,
    name: id,
    value: value,
    placeholder: placeholder,
    onKeyDown: function onKeyDown(e) {
      return _onKeyDown(e);
    },
    onChange: function onChange(e) {
      return _onChange(e);
    },
    onFocus: function onFocus(e) {
      return _onFocus(e);
    },
    onBlur: function onBlur(e) {
      return _onBlur(e);
    },
    readOnly: readOnly,
    onPaste: function onPaste(e) {
      if (noPaste) e.preventDefault();
    },
    onCopy: function onCopy(e) {
      if (noCopy) e.preventDefault();
    },
    maxLength: size,
    size: size,
    autoComplete: "off",
    disabled: disabled,
    ref: ref
  }), /*#__PURE__*/React.createElement("span", {
    htmlFor: id
  }, titleBottom)));
};

TextBox.propTypes = {
  id: PropTypes.string.isRequired,
  titleTop: PropTypes.string,
  titleBottom: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  eventChange: PropTypes.func.isRequired,
  eventFocus: PropTypes.func,
  eventBlur: PropTypes.func,
  eventKeyDown: PropTypes.func,
  readOnly: PropTypes.bool,
  noCopy: PropTypes.bool,
  noPaste: PropTypes.bool,
  size: PropTypes.number
};
TextBox.defaultProps = {
  size: 200
};

var Title = function Title(_ref) {
  var label = _ref.label,
      secundary = _ref.secundary;
  var component;

  if (secundary) {
    component = /*#__PURE__*/React.createElement("div", {
      className: "title"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "font-bold"
    }, label), /*#__PURE__*/React.createElement("div", {
      className: "line"
    }));
  } else {
    component = /*#__PURE__*/React.createElement("div", {
      className: "title"
    }, /*#__PURE__*/React.createElement("h2", {
      className: "font-bold"
    }, label), /*#__PURE__*/React.createElement("div", {
      className: "line"
    }));
  }

  return component;
};

Title.propTypes = {
  label: PropTypes.string.isRequired,
  secundary: PropTypes.bool
};

var NavBar = function NavBar() {
  return /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "bg-blue"
  }, /*#__PURE__*/React.createElement("form", {
    className: "grid-primary padding-v-0"
  }, /*#__PURE__*/React.createElement("div", {
    className: "start-1 size-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "topnav"
  }, /*#__PURE__*/React.createElement("a", {
    className: "active",
    href: "#home"
  }, "Home"), /*#__PURE__*/React.createElement("a", {
    href: "#news"
  }, "News"), /*#__PURE__*/React.createElement("a", {
    href: "#contact"
  }, "Contact"), /*#__PURE__*/React.createElement("div", {
    className: "topnav-right"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#search"
  }, "Search"), /*#__PURE__*/React.createElement("a", {
    href: "#about"
  }, "About")))))), /*#__PURE__*/React.createElement("div", {
    className: "padding-v-20"
  }));
};

var EdtLib = {
  Button: Button,
  CheckButton: CheckButton,
  RadioButton: RadioButton,
  Selector: Selector,
  TextBox: TextBox,
  Title: Title,
  Spinner: Spinner,
  NavBar: NavBar
};

module.exports = EdtLib;
//# sourceMappingURL=index.js.map
