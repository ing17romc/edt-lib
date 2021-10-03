function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));
var reactRouterDom = require('react-router-dom');
var ReactModal = _interopDefault(require('react-modal'));
var entry_webpack = require('react-pdf/dist/umd/entry.webpack');

var TYPE_NOTIFICATION = {
  ERROR: 'error',
  WARNING: 'warning',
  INFO: 'info',
  SUCCESSFULL: 'successful'
};
var SIZE_CONTROL = {
  LG: 'lg',
  MD: 'md',
  SM: 'sm',
  XS: 'xs'
};
var STYLE_CONTROL = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary'
};
var STYLE_STATUS_CONTROL = {
  DISABLED: 'disabled',
  READ_ONLY: 'readOnly',
  REQUIRED: 'required'
};
var ACTION_ICONS = ['search', 'home', 'account_circle', 'settings', 'done', 'info', 'check_circle', 'delete', 'logout', 'description', 'lock', 'help', 'manage_accounts', 'filter_alt', 'event', 'login', 'list', 'lightbulb', 'autorenew', 'print', 'tab', 'zoom_in', 'zoom_out'];
var ALERT_ICONS = ['add_alert', 'error', 'notification_important', 'warning'];
var AUDIO_AND_VIDEO_ICONS = ['play_arrow', 'videocam', 'mic', 'volume_up', 'pause', 'volume_off', 'replay', 'skip_next', 'stop', 'movie', 'skip_previous', 'loop', 'fast_forward', 'mic_off', 'video_call', 'repeat', 'volume_mute', 'fast_rewind', 'volume_down', 'repeat_one'];
var COMMUNICATION_ICONS = ['email', 'location_on', 'call', 'chat', 'list_alt', 'alternate_email', 'qr_code_2', 'message', 'sentiment_satisfied_alt', 'comment', 'live_help', 'rss_feed', 'import_export', 'mark_email_read', 'stay_current_portrait', 'duo', 'key', 'desktop_access_disabled'];
var CONTENT_ICONS = ['add', 'send', 'content_copy', 'clear', 'mail', 'save', 'filter_list', 'remove', 'sort', 'inventory', 'create', 'flag', 'reply', 'push_pin', 'block', 'calculate', 'report', 'archive', 'select_all', 'content_paste_go'];
var DIVICE_ICONS = ['password', 'quiz', 'storage', 'pin', 'bluetooth', 'access_time', 'sd_storage', 'restart_alt'];
var EDITOR_ICONS = ['attach_money', 'mode_edit', 'format_list_bulleted', 'attach_file', 'edit_note', 'checklist', 'format_list_numbered', 'insert_photo', 'format_bold', 'insert_emoticon', 'table_rows', 'format_italic', 'format_align_left', 'format_underlined', 'format_align_center', 'format_align_right', 'format_align_justify'];
var FILE_ICONS = ['file_download', 'file_upload', 'folder', 'grid_view', 'upload_file', 'cloud_upload', 'cloud_download', 'folder_open', 'cloud', 'create_new_folder'];
var HARDWARE_ICONS = ['keyboard_arrow_down', 'smartphone', 'phone_iphone', 'keyboard_arrow_right', 'computer', 'desktop_windows', 'phone_android', 'keyboard_backspace', 'keyboard_arrow_up', 'keyboard_arrow_left', 'keyboard', 'headphones', 'tv', 'keyboard_return', 'headset_mic', 'mouse', 'keyboard_voice', 'tablet_mac', 'watch', 'keyboard_double_arrow_left', 'keyboard_double_arrow_right'];
var IMAGE_ICONS = ['photo_camera', 'image', 'timer', 'camera', 'crop', 'broken_image', 'flip_camera_ios', 'movie_filter', 'crop_rotate'];
var NAVIGATION_ICONS = ['close', 'menu', 'expand_more', 'expand_less', 'arrow_back', 'arrow_forward', 'chevron_right', 'chevron_left', 'arrow_drop_down', 'arrow_drop_up', 'first_page', 'last_page', 'campaign', 'apps', 'refresh', 'unfold_more', 'unfold_less', 'fullscreen_exit', 'fullscreen', 'more_vert', 'more_horiz'];
var NOTIFICATION_ICONS = ['support_agent', 'wifi', 'sync', 'event_available', 'priority_high', 'event_note', 'sync_problem', 'vpn_lock', 'do_disturb', 'voice_chat'];
var SOCIAL_ICONS = ['person', 'notifications', 'groups', 'group', 'share', 'person_add', 'public', 'notifications_active', 'whatsapp', 'woman', 'man', 'recycling', 'telegram', 'adobe', 'snapchat', 'apple', 'thumb_up_alt', 'thumb_down_alt', 'notifications_paused', 'tiktok'];
var ICONS = ACTION_ICONS.concat(ALERT_ICONS).concat(AUDIO_AND_VIDEO_ICONS).concat(COMMUNICATION_ICONS).concat(CONTENT_ICONS).concat(DIVICE_ICONS).concat(EDITOR_ICONS).concat(FILE_ICONS).concat(HARDWARE_ICONS).concat(IMAGE_ICONS).concat(NAVIGATION_ICONS).concat(NOTIFICATION_ICONS).concat(SOCIAL_ICONS);

var jsonToArray = function jsonToArray(json) {
  var result = [];

  for (var i in json) {
    result.push(json[i]);
  }

  return result;
};
var getInitialValue = function getInitialValue(newValue, initialValue) {
  if (newValue === undefined || newValue === null) {
    return initialValue;
  } else {
    return newValue;
  }
};
var ternaryOperation = function ternaryOperation(condicion, valorVerdadero, valorFalso) {
  if (condicion) {
    return valorVerdadero;
  } else {
    return valorFalso;
  }
};

var Button = function Button(_ref) {
  var id = _ref.id,
      title = _ref.title,
      disabled = _ref.disabled,
      _onClick = _ref.onClick,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? STYLE_CONTROL.PRIMARY : _ref$type,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? SIZE_CONTROL.MD : _ref$size;
  return /*#__PURE__*/React__default.createElement("button", {
    id: id,
    className: type + " " + size,
    type: ternaryOperation(_onClick, 'button', 'submit'),
    onClick: function onClick(e) {
      if (_onClick) _onClick(e);
    },
    disabled: disabled
  }, title);
};

Button.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(jsonToArray(STYLE_CONTROL)),
  size: PropTypes.oneOf(jsonToArray(SIZE_CONTROL))
};

var CheckButton = function CheckButton(_ref) {
  var id = _ref.id,
      label = _ref.label,
      required = _ref.required,
      disabled = _ref.disabled,
      readOnly = _ref.readOnly,
      checked = _ref.checked,
      eventChange = _ref.eventChange,
      _ref$ref = _ref.ref,
      ref = _ref$ref === void 0 ? null : _ref$ref;

  var style = function style() {
    if (disabled) {
      return STYLE_STATUS_CONTROL.DISABLED;
    } else if (readOnly) {
      return STYLE_STATUS_CONTROL.READ_ONLY;
    } else if (required && !checked) {
      return STYLE_STATUS_CONTROL.REQUIRED;
    } else {
      return '';
    }
  };

  return /*#__PURE__*/React__default.createElement("div", {
    className: "checkbutton " + style()
  }, /*#__PURE__*/React__default.createElement("input", {
    type: "checkbox",
    id: id,
    name: id,
    required: !disabled && required && !checked,
    disabled: disabled,
    checked: checked,
    onChange: function onChange(e) {
      if (!readOnly) {
        eventChange(e);
      }
    },
    ref: ref
  }), /*#__PURE__*/React__default.createElement("label", {
    htmlFor: id
  }, label));
};

CheckButton.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  readOnly: PropTypes.bool,
  checked: PropTypes.bool.isRequired,
  eventChange: PropTypes.func.isRequired
};

var RadioButton = function RadioButton(_ref) {
  var id = _ref.id,
      name = _ref.name,
      label = _ref.label,
      disabled = _ref.disabled,
      required = _ref.required,
      readOnly = _ref.readOnly,
      value = _ref.value,
      eventChange = _ref.eventChange,
      _ref$ref = _ref.ref,
      ref = _ref$ref === void 0 ? null : _ref$ref;

  var style = function style() {
    if (disabled) {
      return STYLE_STATUS_CONTROL.DISABLED;
    } else if (readOnly) {
      return STYLE_STATUS_CONTROL.READ_ONLY;
    } else if (required && !value) {
      return STYLE_STATUS_CONTROL.REQUIRED;
    } else {
      return '';
    }
  };

  return /*#__PURE__*/React__default.createElement("div", {
    className: "radiobutton " + style()
  }, /*#__PURE__*/React__default.createElement("input", {
    type: "radio",
    id: id,
    name: name,
    required: !disabled && required && !value,
    disabled: disabled,
    value: value,
    checked: id === value,
    onChange: function onChange(e) {
      if (!readOnly) {
        eventChange(e);
      }
    },
    ref: ref
  }), /*#__PURE__*/React__default.createElement("label", {
    htmlFor: id
  }, label));
};

RadioButton.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  readOnly: PropTypes.bool,
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
      readOnly = _ref.readOnly,
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
      return STYLE_STATUS_CONTROL.DISABLED;
    } else if (readOnly) {
      return STYLE_STATUS_CONTROL.READ_ONLY;
    } else if (required && !value) {
      return STYLE_STATUS_CONTROL.REQUIRED;
    } else {
      return '';
    }
  };

  return /*#__PURE__*/React__default.createElement("div", {
    className: 'control-container '
  }, /*#__PURE__*/React__default.createElement("div", {
    className: style()
  }, /*#__PURE__*/React__default.createElement("span", {
    htmlFor: id
  }, titleTop), /*#__PURE__*/React__default.createElement("select", {
    id: id,
    name: id,
    value: value,
    onChange: function onChange(e) {
      return _onChange(e);
    },
    disabled: readOnly | disabled,
    required: required,
    ref: ref
  }, options.map(function (element, index) {
    return /*#__PURE__*/React__default.createElement("option", {
      key: index,
      value: getInitialValue(element.key, element.value)
    }, element.value);
  })), /*#__PURE__*/React__default.createElement("span", {
    htmlFor: id
  }, titleBottom)));
};

Selector.propTypes = {
  id: PropTypes.string.isRequired,
  titleTop: PropTypes.string,
  titleBottom: PropTypes.string,
  value: PropTypes.any.isRequired,
  eventChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  readOnly: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.any,
    key: PropTypes.string
  }))
};

var Spinner = function Spinner() {
  return /*#__PURE__*/React__default.createElement("div", {
    className: "container-load"
  }, /*#__PURE__*/React__default.createElement("div", {
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
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 200 : _ref$size,
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
      return STYLE_STATUS_CONTROL.DISABLED;
    } else if (readOnly) {
      return STYLE_STATUS_CONTROL.READ_ONLY;
    } else if (required && !value) {
      return STYLE_STATUS_CONTROL.REQUIRED;
    } else {
      return '';
    }
  };

  return /*#__PURE__*/React__default.createElement("div", {
    className: 'control-container '
  }, /*#__PURE__*/React__default.createElement("div", {
    className: style()
  }, /*#__PURE__*/React__default.createElement("span", {
    htmlFor: id
  }, titleTop), /*#__PURE__*/React__default.createElement("input", {
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
    required: required,
    ref: ref
  }), /*#__PURE__*/React__default.createElement("span", {
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

var Title = function Title(_ref) {
  var label = _ref.label,
      secundary = _ref.secundary;
  var component;

  if (secundary) {
    component = /*#__PURE__*/React__default.createElement("div", {
      className: "title"
    }, /*#__PURE__*/React__default.createElement("h4", {
      className: "font-bold"
    }, label), /*#__PURE__*/React__default.createElement("div", {
      className: "line"
    }));
  } else {
    component = /*#__PURE__*/React__default.createElement("div", {
      className: "title"
    }, /*#__PURE__*/React__default.createElement("h2", {
      className: "font-bold"
    }, label), /*#__PURE__*/React__default.createElement("div", {
      className: "line"
    }));
  }

  return component;
};

Title.propTypes = {
  label: PropTypes.string.isRequired,
  secundary: PropTypes.bool
};

var TextButton = function TextButton(_ref) {
  var id = _ref.id,
      text = _ref.text,
      disabled = _ref.disabled,
      _onClick = _ref.onClick,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? STYLE_CONTROL.PRIMARY : _ref$type;

  var style = function style() {
    return "textButton " + type + " " + ternaryOperation(disabled, STYLE_STATUS_CONTROL.DISABLED, '');
  };

  return /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement("button", {
    className: style(),
    id: id,
    type: ternaryOperation(_onClick, 'button', 'submit'),
    name: id,
    disabled: disabled,
    onClick: function onClick(e) {
      if (!disabled) {
        _onClick(e);
      }
    }
  }, text));
};

TextButton.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(jsonToArray(STYLE_CONTROL))
};

var TextArea = function TextArea(_ref) {
  var id = _ref.id,
      title = _ref.title,
      placeholder = _ref.placeholder,
      _ref$value = _ref.value,
      value = _ref$value === void 0 ? '' : _ref$value,
      required = _ref.required,
      disabled = _ref.disabled,
      readOnly = _ref.readOnly,
      noPaste = _ref.noPaste,
      noCopy = _ref.noCopy,
      eventChange = _ref.eventChange,
      eventFocus = _ref.eventFocus,
      eventBlur = _ref.eventBlur,
      eventKeyDown = _ref.eventKeyDown,
      _ref$ref = _ref.ref,
      ref = _ref$ref === void 0 ? null : _ref$ref,
      _ref$rows = _ref.rows,
      rows = _ref$rows === void 0 ? 2 : _ref$rows;

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
      return STYLE_STATUS_CONTROL.DISABLED;
    } else if (readOnly) {
      return STYLE_STATUS_CONTROL.READ_ONLY;
    } else if (required && !value) {
      return STYLE_STATUS_CONTROL.REQUIRED;
    } else {
      return '';
    }
  };

  return /*#__PURE__*/React__default.createElement("div", {
    className: 'control-container '
  }, /*#__PURE__*/React__default.createElement("div", {
    className: style()
  }, /*#__PURE__*/React__default.createElement("span", {
    htmlFor: id
  }, title), /*#__PURE__*/React__default.createElement("textarea", {
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
    disabled: disabled,
    required: required,
    ref: ref,
    rows: rows
  })));
};

TextArea.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  eventChange: PropTypes.func,
  eventFocus: PropTypes.func,
  eventBlur: PropTypes.func,
  eventKeyDown: PropTypes.func,
  readOnly: PropTypes.bool,
  noCopy: PropTypes.bool,
  noPaste: PropTypes.bool,
  rows: PropTypes.number
};

var NavBar = function NavBar(_ref) {
  var leftOptions = _ref.leftOptions,
      rightOptions = _ref.rightOptions;
  var location = reactRouterDom.useLocation();
  return /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement("div", {
    className: " container-nav-bar-father "
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "container-nav-bar bg-blue"
  }, /*#__PURE__*/React__default.createElement("form", {
    className: "grid-primary padding-v-0"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "start-1 size-12"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "topnav font-22"
  }, leftOptions.map(function (element, index) {
    return /*#__PURE__*/React__default.createElement(reactRouterDom.Link, {
      key: index,
      to: element.path,
      className: element.path === location.pathname ? 'active' : ''
    }, element.name);
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "topnav-right"
  }, rightOptions.map(function (element, index) {
    return /*#__PURE__*/React__default.createElement(reactRouterDom.Link, {
      key: index,
      to: element.path,
      className: element.path === location.pathname ? 'active' : ''
    }, element.name);
  }))))))), /*#__PURE__*/React__default.createElement("div", {
    className: "nav-bar-margin-bootom "
  }));
};

NavBar.propTypes = {
  leftOptions: PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  })),
  rightOptions: PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }))
};

var DatePicker = function DatePicker(_ref) {
  var id = _ref.id,
      title = _ref.title,
      value = _ref.value,
      eventChange = _ref.eventChange,
      disabled = _ref.disabled,
      readOnly = _ref.readOnly,
      required = _ref.required,
      _ref$ref = _ref.ref,
      ref = _ref$ref === void 0 ? null : _ref$ref;
  var strDay = '';
  var strMonth = '';
  var strYear = '';

  if (Date.parse(value)) {
    var _value = new Date(value);

    strDay = _value.getDate().toString();
    strMonth = _value.getMonth().toString();
    strYear = _value.getFullYear().toString();
  }

  var _useState = React.useState(strDay),
      day = _useState[0],
      setDay = _useState[1];

  var _useState2 = React.useState(strMonth),
      month = _useState2[0],
      setMonth = _useState2[1];

  var _useState3 = React.useState(strYear),
      year = _useState3[0],
      setYear = _useState3[1];

  var _useState4 = React.useState([]),
      days = _useState4[0],
      setDays = _useState4[1];

  var dateformat = function dateformat(_month, _day, _year) {
    return _month + "/" + _day + "/" + _year;
  };

  var onChangeDay = function onChangeDay(e) {
    setDay(e.target.value);
    var strNewDate = dateformat(month, e.target.value, year);
    updateDate(strNewDate);
  };

  var onChangeMonth = function onChangeMonth(e) {
    setMonth(e.target.value);
    var strNewDate = dateformat(e.target.value, day, year);
    updateDate(strNewDate);
  };

  var onChangeYear = function onChangeYear(e) {
    setYear(e.target.value);
    var strNewDate = dateformat(month, day, e.target.value);
    updateDate(strNewDate);
  };

  var updateDate = function updateDate(strNewDate) {
    if (Date.parse(strNewDate) && !strNewDate.startsWith('/') && !strNewDate.endsWith('/') && !strNewDate.includes('//')) {
      eventChange({
        id: id,
        value: strNewDate
      });
    } else {
      eventChange({
        id: id,
        value: ''
      });
    }
  };

  var id_day = "day_" + id;
  var id_month = "month_" + id;
  var id_year = "year_" + id;
  var titleDay = 'Día';
  var titleMonth = 'Mes';
  var titleYear = 'Año';
  var controlStyle = ternaryOperation(disabled, STYLE_STATUS_CONTROL.DISABLED, '');

  var style = function style(_value) {
    if (disabled) {
      return STYLE_STATUS_CONTROL.DISABLED;
    } else if (readOnly) {
      return STYLE_STATUS_CONTROL.READ_ONLY;
    } else if (required && !_value) {
      return STYLE_STATUS_CONTROL.REQUIRED;
    } else {
      return '';
    }
  };

  var values = function values(min, max) {
    if (min === void 0) {
      min = 1;
    }

    if (max === void 0) {
      max = 12;
    }

    var array = [];

    for (var i = min; i <= max; i++) {
      array.push(i.toString());
    }

    return array;
  };

  React.useEffect(function () {
    var isLeapYear = function isLeapYear(_year) {
      return ternaryOperation(_year % 400 === 0, true, ternaryOperation(_year % 100 === 0, false, _year % 4 === 0));
    };

    var endDay = 31;

    if (year && isLeapYear(parseInt(year)) && month === '2') {
      endDay = 29;
    } else if (month === '2') {
      endDay = 28;
    } else if (['4', '6', '9', '11'].includes(month)) {
      endDay = 30;
    }

    if (day && parseInt(day) > endDay) {
      setDay('');
    }

    setDays(values(1, endDay));
  }, [month, year, day]);
  return /*#__PURE__*/React__default.createElement("div", {
    className: 'control-container  '
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "container-date "
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "title " + controlStyle
  }, /*#__PURE__*/React__default.createElement("span", {
    htmlFor: id
  }, title)), /*#__PURE__*/React__default.createElement("div", {
    className: "day"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: style(day)
  }, /*#__PURE__*/React__default.createElement("select", {
    id: id_day,
    name: id_day,
    value: day,
    onChange: function onChange(e) {
      return onChangeDay(e);
    },
    disabled: readOnly | disabled,
    required: required,
    ref: ref
  }, /*#__PURE__*/React__default.createElement("option", {
    value: ''
  }, titleDay), days.map(function (element) {
    return /*#__PURE__*/React__default.createElement("option", {
      key: element,
      value: element
    }, element);
  })), /*#__PURE__*/React__default.createElement("span", {
    htmlFor: id_day
  }, ternaryOperation(day !== '', titleDay, '')))), /*#__PURE__*/React__default.createElement("div", {
    className: "month"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: style(month)
  }, /*#__PURE__*/React__default.createElement("select", {
    id: id_month,
    name: id_month,
    value: month,
    onChange: function onChange(e) {
      return onChangeMonth(e);
    },
    disabled: readOnly | disabled,
    required: required,
    ref: ref
  }, /*#__PURE__*/React__default.createElement("option", {
    value: ''
  }, titleMonth), values(1, 12).map(function (element) {
    return /*#__PURE__*/React__default.createElement("option", {
      key: element,
      value: element
    }, element);
  })), /*#__PURE__*/React__default.createElement("span", {
    htmlFor: id_month
  }, ternaryOperation(month !== '', titleMonth, '')))), /*#__PURE__*/React__default.createElement("div", {
    className: "year"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: style(year)
  }, /*#__PURE__*/React__default.createElement("select", {
    id: id_year,
    name: id_year,
    value: year,
    onChange: function onChange(e) {
      return onChangeYear(e);
    },
    disabled: readOnly | disabled,
    required: required,
    ref: ref
  }, /*#__PURE__*/React__default.createElement("option", {
    value: ''
  }, titleYear), values(1900, 2100).map(function (element) {
    return /*#__PURE__*/React__default.createElement("option", {
      key: element,
      value: element
    }, element);
  })), /*#__PURE__*/React__default.createElement("span", {
    htmlFor: id_year
  }, ternaryOperation(year !== '', titleYear, ''))))));
};

DatePicker.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  eventChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  required: PropTypes.bool,
  title: PropTypes.string
};

var Modal = function Modal(_ref) {
  var show = _ref.show,
      eventModal = _ref.eventModal,
      children = _ref.children;

  var _useState = React.useState(show),
      state = _useState[0],
      setState = _useState[1];

  var closeModal = function closeModal(e) {
    eventModal(e);
  };

  React.useEffect(function () {
    setState(show);
  }, [show]);
  return /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement(ReactModal, {
    isOpen: state,
    onRequestClose: closeModal,
    style: style,
    shouldCloseOnOverlayClick: false
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "modal-container"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "padding-v-20 padding-h-20 "
  }, /*#__PURE__*/React__default.createElement("h4", {
    className: "modal-close-button",
    onClick: closeModal
  }, "X"))), /*#__PURE__*/React__default.createElement("div", {
    className: "modal-body "
  }, children)));
};

Modal.propTypes = {
  eventModal: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  children: PropTypes.node
};
var elementoContenedorPrincipal = document.getElementById('root');

if (elementoContenedorPrincipal === null) {
  elementoContenedorPrincipal = document.createElement('div');
  elementoContenedorPrincipal.id = 'root';
  document.body.appendChild(elementoContenedorPrincipal);
}

ReactModal.setAppElement('#root');
var style = {
  overlay: {
    backgroundColor: '#000F0880',
    zIndex: 10
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    padding: '0px'
  }
};

var ModalNotifications = function ModalNotifications(_ref) {
  var title = _ref.title,
      message = _ref.message,
      details = _ref.details,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? TYPE_NOTIFICATION.INFO : _ref$type,
      eventContinue = _ref.eventContinue,
      showModal = _ref.showModal,
      _eventModal = _ref.eventModal;

  var getText = function getText() {
    switch (type) {
      case TYPE_NOTIFICATION.ERROR:
        return 'X';

      case TYPE_NOTIFICATION.WARNING:
        return '!';

      case TYPE_NOTIFICATION.INFO:
        return 'i';

      case TYPE_NOTIFICATION.SUCCESSFULL:
        return '✔';

      default:
        return '';
    }
  };

  return /*#__PURE__*/React__default.createElement(UI.Modal, {
    show: showModal,
    eventModal: function eventModal(e) {
      return _eventModal(e);
    }
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "body-generic-notifications "
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "grid-primary"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "start-1 size-12 "
  }, /*#__PURE__*/React__default.createElement(UI.Title, {
    label: title,
    secundary: true
  })), /*#__PURE__*/React__default.createElement("div", {
    className: "center start-1 size-12 padding-v-40  "
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "circle " + type + " center"
  }, /*#__PURE__*/React__default.createElement("h1", null, getText()))), /*#__PURE__*/React__default.createElement("div", {
    className: "center start-1 size-12 padding-v-30  "
  }, /*#__PURE__*/React__default.createElement("p", {
    className: "font-16"
  }, " ", message, " ")), /*#__PURE__*/React__default.createElement("div", {
    className: "center start-1 size-12 padding-v-30  "
  }, /*#__PURE__*/React__default.createElement("p", {
    className: "font-14"
  }, " ", details, " ")), /*#__PURE__*/React__default.createElement("div", {
    className: "padding-v-20 start-9 size-4"
  }, /*#__PURE__*/React__default.createElement(UI.Button, {
    title: "Continuar",
    type: "primary",
    onClick: function onClick(e) {
      return eventContinue(e);
    }
  })))));
};

ModalNotifications.propTypes = {
  showModal: PropTypes.bool.isRequired,
  eventModal: PropTypes.func,
  type: PropTypes.oneOf(jsonToArray(TYPE_NOTIFICATION)),
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  details: PropTypes.string,
  eventContinue: PropTypes.func
};

var ModalHttpMessage = function ModalHttpMessage(_ref) {
  var showModal = _ref.showModal,
      _eventModal = _ref.eventModal,
      code = _ref.code,
      title = _ref.title,
      message = _ref.message,
      details = _ref.details;

  var style = function style(codeHttp) {
    switch (true) {
      case codeHttp < 200:
        return 'code-one-hundred';

      case codeHttp < 300:
        return 'code-two-hundred';

      case codeHttp < 400:
        return 'code-three-hundred';

      case codeHttp < 500:
        return 'code-four-hundred';

      case codeHttp < 600:
        return 'code-five-hundred';

      default:
        return '';
    }
  };

  return /*#__PURE__*/React__default.createElement(UI.Modal, {
    show: showModal,
    eventModal: function eventModal(e) {
      return _eventModal(e);
    }
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "body-generic-http-message"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: " grid-primary"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "start-1 size-12 "
  }, /*#__PURE__*/React__default.createElement(UI.Title, {
    label: "Mensaje HTTP",
    secundary: true
  })), /*#__PURE__*/React__default.createElement("div", {
    className: " grid-secondary padding-v-50"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "center start-1 size-20   "
  }, /*#__PURE__*/React__default.createElement("h1", {
    className: style(code)
  }, code, " ")), /*#__PURE__*/React__default.createElement("div", {
    className: "center start-1 size-20  padding-v-10  "
  }, /*#__PURE__*/React__default.createElement("h4", {
    className: style(code)
  }, title))), /*#__PURE__*/React__default.createElement("div", {
    className: " start-1 size-12 "
  }, /*#__PURE__*/React__default.createElement("p", {
    className: "font-18"
  }, " Mensaje ")), /*#__PURE__*/React__default.createElement("div", {
    className: " start-1 size-12 padding-v-10  "
  }, /*#__PURE__*/React__default.createElement("p", {
    className: "font-16"
  }, " ", message, " ")), /*#__PURE__*/React__default.createElement("div", {
    className: "start-1 size-12 padding-v-50  "
  }, /*#__PURE__*/React__default.createElement(UI.TextArea, {
    rows: 6,
    id: "Detalles",
    value: details,
    title: "Detalles",
    readOnly: true
  })))));
};

ModalHttpMessage.propTypes = {
  showModal: PropTypes.bool.isRequired,
  eventModal: PropTypes.func,
  code: PropTypes.number,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  details: PropTypes.string
};

var propTypes = {
  habilitarBotonContinuar: PropTypes.bool
};

var ModalViewerPDF = function ModalViewerPDF(_ref) {
  var pdf = _ref.pdf,
      showModal = _ref.showModal,
      _eventModal = _ref.eventModal;
  var SCALE_DEFAULT = 0.7;
  var SCALE_MIN = 0.2;
  var SCALE_MAX = 1.5;
  var SCALE_JUMPING = 0.1;

  var _useState = React.useState(1),
      pages = _useState[0],
      setNumberPages = _useState[1];

  var _useState2 = React.useState(1),
      pageCurrent = _useState2[0],
      setPageCurrent = _useState2[1];

  var _useState3 = React.useState(SCALE_DEFAULT),
      scale = _useState3[0],
      setScale = _useState3[1];

  var successfullyLoaded = function successfullyLoaded(_ref2) {
    var numPages = _ref2.numPages;
    setNumberPages(numPages);
  };

  var ZERO = 0;
  var ONE = 1;
  var TWO = 2;
  var THREE = 3;

  var eventPager = function eventPager(value) {
    if (value === ZERO) {
      setPageCurrent(1);
    }

    if (value === ONE && pageCurrent > 1) {
      setPageCurrent(pageCurrent - 1);
    }

    if (value === TWO && pageCurrent < pages) {
      setPageCurrent(pageCurrent + 1);
    }

    if (value === THREE) {
      setPageCurrent(pages);
    }
  };

  var scaleOptions = {
    zoom_out: 0,
    zoom_in: 1,
    reset: 2
  };

  var climb = function climb(option) {
    if (option === scaleOptions.zoom_in && scale < SCALE_MAX) {
      setScale(scale + SCALE_JUMPING);
    } else if (option === scaleOptions.zoom_out && scale > SCALE_MIN) {
      setScale(scale - SCALE_JUMPING);
    } else if (option === scaleOptions.reset) {
      setScale(SCALE_DEFAULT);
    }
  };

  return /*#__PURE__*/React__default.createElement(UI.Modal, {
    show: showModal,
    eventModal: function eventModal(e) {
      return _eventModal(e);
    }
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "body-viewer-pdf"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "grid-primary"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "start-1 size-12 "
  }, /*#__PURE__*/React__default.createElement(UI.Title, {
    label: "Visor de PDF",
    secundary: true
  })), /*#__PURE__*/React__default.createElement("div", {
    className: "grid-secondary"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "start-2 size-1 center padding-v-30 "
  }, /*#__PURE__*/React__default.createElement(UI.ImageButton, {
    id: "imageButton",
    size: "sm",
    icon: "first_page",
    text: "first page",
    onClick: function onClick() {
      return eventPager(ZERO);
    }
  })), /*#__PURE__*/React__default.createElement("div", {
    className: "size-1 center padding-v-30  "
  }, /*#__PURE__*/React__default.createElement(UI.ImageButton, {
    id: "imageButton",
    size: "sm",
    icon: "chevron_left",
    text: "back page",
    onClick: function onClick() {
      return eventPager(ONE);
    }
  })), /*#__PURE__*/React__default.createElement("div", {
    className: "size-4 center padding-v-30 little-hand strong"
  }, pageCurrent, " - ", pages), /*#__PURE__*/React__default.createElement("div", {
    className: "size-1 center padding-v-30 "
  }, /*#__PURE__*/React__default.createElement(UI.ImageButton, {
    id: "imageButton",
    size: "sm",
    icon: "chevron_right",
    text: "next page",
    onClick: function onClick() {
      return eventPager(TWO);
    }
  })), /*#__PURE__*/React__default.createElement("div", {
    className: "size-1 center padding-v-30 "
  }, /*#__PURE__*/React__default.createElement(UI.ImageButton, {
    id: "imageButton",
    size: "sm",
    icon: "last_page",
    text: "last page",
    onClick: function onClick() {
      return eventPager(THREE);
    }
  })), /*#__PURE__*/React__default.createElement("div", {
    className: "start-11 size-3 center padding-v-30 "
  }, /*#__PURE__*/React__default.createElement(UI.ImageButton, {
    id: "imageButton",
    size: "sm",
    icon: "zoom_in",
    text: "zoom out",
    onClick: function onClick() {
      return climb(scaleOptions.zoom_in);
    }
  })), /*#__PURE__*/React__default.createElement("div", {
    className: "size-4 center padding-v-30 "
  }, /*#__PURE__*/React__default.createElement(UI.ImageButton, {
    id: "imageButton",
    size: "sm",
    icon: "zoom_out",
    text: "zoom out",
    onClick: function onClick() {
      return climb(scaleOptions.zoom_out);
    }
  })), /*#__PURE__*/React__default.createElement("div", {
    className: "size-2 center padding-v-30 "
  }, /*#__PURE__*/React__default.createElement(UI.ImageButton, {
    id: "imageButton",
    size: "sm",
    icon: "restart_alt",
    text: "reset",
    onClick: function onClick() {
      return climb(scaleOptions.reset);
    }
  }))), /*#__PURE__*/React__default.createElement("div", {
    className: "start-1 size-12 padding-v-30"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "container-pdf padding-v-30"
  }, /*#__PURE__*/React__default.createElement(entry_webpack.Document, {
    error: "Error loading PDF file",
    loading: "Loading the PDF file ...",
    noData: "PDF file not found",
    file: pdf,
    onLoadSuccess: successfullyLoaded
  }, /*#__PURE__*/React__default.createElement(entry_webpack.Page, {
    scale: scale,
    pageNumber: pageCurrent
  })))))));
};

ModalViewerPDF.propTypes = propTypes;

var Icon = function Icon(_ref) {
  var name = _ref.name,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? SIZE_CONTROL.MD : _ref$size;
  return /*#__PURE__*/React__default.createElement("div", {
    className: "container-icon " + size
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "material-icons"
  }, name));
};

Icon.propTypes = {
  name: PropTypes.oneOf(ICONS).isRequired,
  size: PropTypes.oneOf(jsonToArray(SIZE_CONTROL))
};

var Option = function Option(_ref) {
  var label = _ref.label,
      path = _ref.path,
      icon = _ref.icon;
  return /*#__PURE__*/React__default.createElement(reactRouterDom.Link, {
    className: "container-option ",
    to: path
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "material-icons"
  }, icon), /*#__PURE__*/React__default.createElement("hr", null), /*#__PURE__*/React__default.createElement("p", null, " ", label, " "));
};

Option.propTypes = {
  label: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  icon: PropTypes.oneOf(ICONS).isRequired
};

var Menu = function Menu(_ref) {
  var options = _ref.options;
  return /*#__PURE__*/React__default.createElement("div", {
    className: "container-body"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "grid-primary"
  }, options.map(function (element, index) {
    return /*#__PURE__*/React__default.createElement("div", {
      key: index,
      className: " size-3 padding-v-30 "
    }, /*#__PURE__*/React__default.createElement(Option, {
      label: element.name,
      path: element.path,
      icon: element.icon
    }));
  })));
};

Menu.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
  }))
};

var ImageButton = function ImageButton(_ref) {
  var id = _ref.id,
      text = _ref.text,
      icon = _ref.icon,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? SIZE_CONTROL.MD : _ref$size,
      disabled = _ref.disabled,
      _onClick = _ref.onClick;

  var style = function style() {
    return "imageButton " + ternaryOperation(disabled, STYLE_STATUS_CONTROL.DISABLED, '');
  };

  return /*#__PURE__*/React__default.createElement("abbr", {
    title: text
  }, /*#__PURE__*/React__default.createElement("button", {
    className: style(),
    id: id,
    type: ternaryOperation(_onClick, 'button', 'submit'),
    name: id,
    disabled: disabled,
    onClick: function onClick(e) {
      if (!disabled) {
        _onClick(e);
      }
    }
  }, /*#__PURE__*/React__default.createElement(Icon, {
    name: icon,
    size: size
  })));
};

ImageButton.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string,
  icon: PropTypes.oneOf(ICONS).isRequired,
  size: PropTypes.oneOf(jsonToArray(SIZE_CONTROL)),
  disabled: PropTypes.bool,
  onClick: PropTypes.func
};

var UI = {
  Button: Button,
  CheckButton: CheckButton,
  RadioButton: RadioButton,
  Selector: Selector,
  TextBox: TextBox,
  Title: Title,
  TextButton: TextButton,
  TextArea: TextArea,
  DatePicker: DatePicker,
  Modal: Modal,
  ModalNotifications: ModalNotifications,
  ModalHttpMessage: ModalHttpMessage,
  ModalViewerPDF: ModalViewerPDF,
  Icon: Icon,
  NavBar: NavBar,
  Option: Option,
  Menu: Menu,
  ImageButton: ImageButton,
  Spinner: Spinner
};

module.exports = UI;
//# sourceMappingURL=index.js.map
