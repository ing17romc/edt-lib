import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useLocation, Link } from 'react-router-dom';
import ReactModal from 'react-modal';
import { Document, Page } from 'react-pdf/dist/umd/entry.webpack';

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
var constant = {
  TYPE_NOTIFICATION: TYPE_NOTIFICATION,
  SIZE_CONTROL: SIZE_CONTROL,
  STYLE_CONTROL: STYLE_CONTROL,
  STYLE_STATUS_CONTROL: STYLE_STATUS_CONTROL,
  ICONS: ICONS,
  ACTION_ICONS: ACTION_ICONS,
  ALERT_ICONS: ALERT_ICONS,
  AUDIO_AND_VIDEO_ICONS: AUDIO_AND_VIDEO_ICONS,
  COMMUNICATION_ICONS: COMMUNICATION_ICONS,
  CONTENT_ICONS: CONTENT_ICONS,
  DIVICE_ICONS: DIVICE_ICONS,
  EDITOR_ICONS: EDITOR_ICONS,
  FILE_ICONS: FILE_ICONS,
  HARDWARE_ICONS: HARDWARE_ICONS,
  IMAGE_ICONS: IMAGE_ICONS,
  NAVIGATION_ICONS: NAVIGATION_ICONS,
  NOTIFICATION_ICONS: NOTIFICATION_ICONS,
  SOCIAL_ICONS: SOCIAL_ICONS
};

var jsonToArray = function jsonToArray(json) {
  var result = [];

  for (var i in json) {
    result.push(json[i]);
  }

  return result;
};
var getOptionsSelector = function getOptionsSelector(json) {
  var result = [];

  for (var i in json) {
    result.push({
      key: json[i],
      value: json[i]
    });
  }

  return result;
};
var getValueInput = function getValueInput(e) {
  if (e && e.target) {
    if (e.target.tagName.toLowerCase() === 'input') {
      if (e.target.type.toLowerCase() === 'checkbox') {
        return {
          key: e.target.name,
          value: e.target.checked
        };
      } else if (e.target.type.toLowerCase() === 'radio') {
        return {
          key: e.target.name,
          value: e.target.id
        };
      } else {
        return {
          key: e.target.name,
          value: e.target.value
        };
      }
    } else if (e.target.tagName.toLowerCase() === 'button') {
      return {
        key: e.target.id,
        value: ''
      };
    } else if (e.target.tagName.toLowerCase() === 'textarea' || e.target.tagName.toLowerCase() === 'select') {
      return {
        key: e.target.id,
        value: e.target.value
      };
    }
  } else if (e) {
    return {
      key: e.id,
      value: e.value
    };
  } else {
    return null;
  }
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
var onlyNumber = function onlyNumber(value) {
  return getInitialValue(value, '').replace(/[^0-9]/g, '');
};
var onlyAlphanumericWithSpace = function onlyAlphanumericWithSpace(value) {
  return getInitialValue(value, '').replace(/[^\wñÑáÁéÉíÍóÓúÚ\s]/g, '');
};
var onlyAlphanumericWithoutSpace = function onlyAlphanumericWithoutSpace(value) {
  return getInitialValue(value, '').replace(/[\W]/g, '');
};
var lowerCaseText = function lowerCaseText(value) {
  return getInitialValue(value, '').toLowerCase();
};
var upperCaseText = function upperCaseText(value) {
  return getInitialValue(value, '').toUpperCase();
};
var capitalText = function capitalText(value) {
  return getInitialValue(value, '').replace(/\w\S*/g, function (w) {
    return w.replace(/^\w/, function (c) {
      return c.toUpperCase();
    });
  });
};
var functions = {
  jsonToArray: jsonToArray,
  getOptionsSelector: getOptionsSelector,
  getValueInput: getValueInput,
  getInitialValue: getInitialValue,
  ternaryOperation: ternaryOperation,
  onlyNumber: onlyNumber,
  onlyAlphanumericWithSpace: onlyAlphanumericWithSpace,
  onlyAlphanumericWithoutSpace: onlyAlphanumericWithoutSpace,
  lowerCaseText: lowerCaseText,
  upperCaseText: upperCaseText,
  capitalText: capitalText
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
  return /*#__PURE__*/React.createElement("button", {
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

  return /*#__PURE__*/React.createElement("div", {
    className: "checkbutton " + style()
  }, /*#__PURE__*/React.createElement("input", {
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
  }), /*#__PURE__*/React.createElement("label", {
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

  return /*#__PURE__*/React.createElement("div", {
    className: "radiobutton " + style()
  }, /*#__PURE__*/React.createElement("input", {
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
    disabled: readOnly | disabled,
    required: required,
    ref: ref
  }, options.map(function (element, index) {
    return /*#__PURE__*/React.createElement("option", {
      key: index,
      value: getInitialValue(element.key, element.value)
    }, element.value);
  })), /*#__PURE__*/React.createElement("span", {
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

  return /*#__PURE__*/React.createElement("div", {
    className: 'control-container '
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
    required: required,
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

var Title = function Title(_ref) {
  var label = _ref.label,
      secundary = _ref.secundary;
  var component;

  if (secundary) {
    component = /*#__PURE__*/React.createElement("div", {
      className: "title"
    }, /*#__PURE__*/React.createElement("h4", {
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

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
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

  return /*#__PURE__*/React.createElement("div", {
    className: 'control-container '
  }, /*#__PURE__*/React.createElement("div", {
    className: style()
  }, /*#__PURE__*/React.createElement("span", {
    htmlFor: id
  }, title), /*#__PURE__*/React.createElement("textarea", {
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
  var location = useLocation();
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: " container-nav-bar-father "
  }, /*#__PURE__*/React.createElement("div", {
    className: "container-nav-bar bg-blue"
  }, /*#__PURE__*/React.createElement("form", {
    className: "grid-primary padding-v-0"
  }, /*#__PURE__*/React.createElement("div", {
    className: "start-1 size-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "topnav font-22"
  }, leftOptions.map(function (element, index) {
    return /*#__PURE__*/React.createElement(Link, {
      key: index,
      to: element.path,
      className: element.path === location.pathname ? 'active' : ''
    }, element.name);
  }), /*#__PURE__*/React.createElement("div", {
    className: "topnav-right"
  }, rightOptions.map(function (element, index) {
    return /*#__PURE__*/React.createElement(Link, {
      key: index,
      to: element.path,
      className: element.path === location.pathname ? 'active' : ''
    }, element.name);
  }))))))), /*#__PURE__*/React.createElement("div", {
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

  var _useState = useState(strDay),
      day = _useState[0],
      setDay = _useState[1];

  var _useState2 = useState(strMonth),
      month = _useState2[0],
      setMonth = _useState2[1];

  var _useState3 = useState(strYear),
      year = _useState3[0],
      setYear = _useState3[1];

  var _useState4 = useState([]),
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

  useEffect(function () {
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
  return /*#__PURE__*/React.createElement("div", {
    className: 'control-container  '
  }, /*#__PURE__*/React.createElement("div", {
    className: "container-date "
  }, /*#__PURE__*/React.createElement("div", {
    className: "title " + controlStyle
  }, /*#__PURE__*/React.createElement("span", {
    htmlFor: id
  }, title)), /*#__PURE__*/React.createElement("div", {
    className: "day"
  }, /*#__PURE__*/React.createElement("div", {
    className: style(day)
  }, /*#__PURE__*/React.createElement("select", {
    id: id_day,
    name: id_day,
    value: day,
    onChange: function onChange(e) {
      return onChangeDay(e);
    },
    disabled: readOnly | disabled,
    required: required,
    ref: ref
  }, /*#__PURE__*/React.createElement("option", {
    value: ''
  }, titleDay), days.map(function (element) {
    return /*#__PURE__*/React.createElement("option", {
      key: element,
      value: element
    }, element);
  })), /*#__PURE__*/React.createElement("span", {
    htmlFor: id_day
  }, ternaryOperation(day !== '', titleDay, '')))), /*#__PURE__*/React.createElement("div", {
    className: "month"
  }, /*#__PURE__*/React.createElement("div", {
    className: style(month)
  }, /*#__PURE__*/React.createElement("select", {
    id: id_month,
    name: id_month,
    value: month,
    onChange: function onChange(e) {
      return onChangeMonth(e);
    },
    disabled: readOnly | disabled,
    required: required,
    ref: ref
  }, /*#__PURE__*/React.createElement("option", {
    value: ''
  }, titleMonth), values(1, 12).map(function (element) {
    return /*#__PURE__*/React.createElement("option", {
      key: element,
      value: element
    }, element);
  })), /*#__PURE__*/React.createElement("span", {
    htmlFor: id_month
  }, ternaryOperation(month !== '', titleMonth, '')))), /*#__PURE__*/React.createElement("div", {
    className: "year"
  }, /*#__PURE__*/React.createElement("div", {
    className: style(year)
  }, /*#__PURE__*/React.createElement("select", {
    id: id_year,
    name: id_year,
    value: year,
    onChange: function onChange(e) {
      return onChangeYear(e);
    },
    disabled: readOnly | disabled,
    required: required,
    ref: ref
  }, /*#__PURE__*/React.createElement("option", {
    value: ''
  }, titleYear), values(1900, 2100).map(function (element) {
    return /*#__PURE__*/React.createElement("option", {
      key: element,
      value: element
    }, element);
  })), /*#__PURE__*/React.createElement("span", {
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

  var _useState = useState(show),
      state = _useState[0],
      setState = _useState[1];

  var closeModal = function closeModal(e) {
    eventModal(e);
  };

  useEffect(function () {
    setState(show);
  }, [show]);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ReactModal, {
    isOpen: state,
    onRequestClose: closeModal,
    style: style,
    shouldCloseOnOverlayClick: false
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "padding-v-20 padding-h-20 "
  }, /*#__PURE__*/React.createElement("h4", {
    className: "modal-close-button",
    onClick: closeModal
  }, "X"))), /*#__PURE__*/React.createElement("div", {
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

  return /*#__PURE__*/React.createElement(UI.Modal, {
    show: showModal,
    eventModal: function eventModal(e) {
      return _eventModal(e);
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "body-generic-notifications "
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid-primary"
  }, /*#__PURE__*/React.createElement("div", {
    className: "start-1 size-12 "
  }, /*#__PURE__*/React.createElement(UI.Title, {
    label: title,
    secundary: true
  })), /*#__PURE__*/React.createElement("div", {
    className: "center start-1 size-12 padding-v-40  "
  }, /*#__PURE__*/React.createElement("div", {
    className: "circle " + type + " center"
  }, /*#__PURE__*/React.createElement("h1", null, getText()))), /*#__PURE__*/React.createElement("div", {
    className: "center start-1 size-12 padding-v-30  "
  }, /*#__PURE__*/React.createElement("p", {
    className: "font-16"
  }, " ", message, " ")), /*#__PURE__*/React.createElement("div", {
    className: "center start-1 size-12 padding-v-30  "
  }, /*#__PURE__*/React.createElement("p", {
    className: "font-14"
  }, " ", details, " ")), /*#__PURE__*/React.createElement("div", {
    className: "padding-v-20 start-9 size-4"
  }, /*#__PURE__*/React.createElement(UI.Button, {
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

  return /*#__PURE__*/React.createElement(UI.Modal, {
    show: showModal,
    eventModal: function eventModal(e) {
      return _eventModal(e);
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "body-generic-http-message"
  }, /*#__PURE__*/React.createElement("div", {
    className: " grid-primary"
  }, /*#__PURE__*/React.createElement("div", {
    className: "start-1 size-12 "
  }, /*#__PURE__*/React.createElement(UI.Title, {
    label: "Mensaje HTTP",
    secundary: true
  })), /*#__PURE__*/React.createElement("div", {
    className: " grid-secondary padding-v-50"
  }, /*#__PURE__*/React.createElement("div", {
    className: "center start-1 size-20   "
  }, /*#__PURE__*/React.createElement("h1", {
    className: style(code)
  }, code, " ")), /*#__PURE__*/React.createElement("div", {
    className: "center start-1 size-20  padding-v-10  "
  }, /*#__PURE__*/React.createElement("h4", {
    className: style(code)
  }, title))), /*#__PURE__*/React.createElement("div", {
    className: " start-1 size-12 "
  }, /*#__PURE__*/React.createElement("p", {
    className: "font-18"
  }, " Mensaje ")), /*#__PURE__*/React.createElement("div", {
    className: " start-1 size-12 padding-v-10  "
  }, /*#__PURE__*/React.createElement("p", {
    className: "font-16"
  }, " ", message, " ")), /*#__PURE__*/React.createElement("div", {
    className: "start-1 size-12 padding-v-50  "
  }, /*#__PURE__*/React.createElement(UI.TextArea, {
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

  var _useState = useState(1),
      pages = _useState[0],
      setNumberPages = _useState[1];

  var _useState2 = useState(1),
      pageCurrent = _useState2[0],
      setPageCurrent = _useState2[1];

  var _useState3 = useState(SCALE_DEFAULT),
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

  return /*#__PURE__*/React.createElement(UI.Modal, {
    show: showModal,
    eventModal: function eventModal(e) {
      return _eventModal(e);
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "body-viewer-pdf"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid-primary"
  }, /*#__PURE__*/React.createElement("div", {
    className: "start-1 size-12 "
  }, /*#__PURE__*/React.createElement(UI.Title, {
    label: "Visor de PDF",
    secundary: true
  })), /*#__PURE__*/React.createElement("div", {
    className: "grid-secondary"
  }, /*#__PURE__*/React.createElement("div", {
    className: "start-2 size-1 center padding-v-30 "
  }, /*#__PURE__*/React.createElement(UI.ImageButton, {
    id: "imageButton",
    size: "sm",
    icon: "first_page",
    text: "first page",
    onClick: function onClick() {
      return eventPager(ZERO);
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "size-1 center padding-v-30  "
  }, /*#__PURE__*/React.createElement(UI.ImageButton, {
    id: "imageButton",
    size: "sm",
    icon: "chevron_left",
    text: "back page",
    onClick: function onClick() {
      return eventPager(ONE);
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "size-4 center padding-v-30 little-hand strong"
  }, pageCurrent, " - ", pages), /*#__PURE__*/React.createElement("div", {
    className: "size-1 center padding-v-30 "
  }, /*#__PURE__*/React.createElement(UI.ImageButton, {
    id: "imageButton",
    size: "sm",
    icon: "chevron_right",
    text: "next page",
    onClick: function onClick() {
      return eventPager(TWO);
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "size-1 center padding-v-30 "
  }, /*#__PURE__*/React.createElement(UI.ImageButton, {
    id: "imageButton",
    size: "sm",
    icon: "last_page",
    text: "last page",
    onClick: function onClick() {
      return eventPager(THREE);
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "start-11 size-3 center padding-v-30 "
  }, /*#__PURE__*/React.createElement(UI.ImageButton, {
    id: "imageButton",
    size: "sm",
    icon: "zoom_in",
    text: "zoom out",
    onClick: function onClick() {
      return climb(scaleOptions.zoom_in);
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "size-4 center padding-v-30 "
  }, /*#__PURE__*/React.createElement(UI.ImageButton, {
    id: "imageButton",
    size: "sm",
    icon: "zoom_out",
    text: "zoom out",
    onClick: function onClick() {
      return climb(scaleOptions.zoom_out);
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "size-2 center padding-v-30 "
  }, /*#__PURE__*/React.createElement(UI.ImageButton, {
    id: "imageButton",
    size: "sm",
    icon: "restart_alt",
    text: "reset",
    onClick: function onClick() {
      return climb(scaleOptions.reset);
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "start-1 size-12 padding-v-30"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container-pdf padding-v-30"
  }, /*#__PURE__*/React.createElement(Document, {
    error: "Error loading PDF file",
    loading: "Loading the PDF file ...",
    noData: "PDF file not found",
    file: pdf,
    onLoadSuccess: successfullyLoaded
  }, /*#__PURE__*/React.createElement(Page, {
    scale: scale,
    pageNumber: pageCurrent
  })))))));
};

ModalViewerPDF.propTypes = propTypes;

var Icon = function Icon(_ref) {
  var name = _ref.name,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? SIZE_CONTROL.MD : _ref$size;
  return /*#__PURE__*/React.createElement("div", {
    className: "container-icon " + size
  }, /*#__PURE__*/React.createElement("div", {
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
  return /*#__PURE__*/React.createElement(Link, {
    className: "container-option ",
    to: path
  }, /*#__PURE__*/React.createElement("div", {
    className: "material-icons"
  }, icon), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("p", null, " ", label, " "));
};

Option.propTypes = {
  label: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  icon: PropTypes.oneOf(ICONS).isRequired
};

var Menu = function Menu(_ref) {
  var options = _ref.options;
  return /*#__PURE__*/React.createElement("div", {
    className: "container-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid-primary"
  }, options.map(function (element, index) {
    return /*#__PURE__*/React.createElement("div", {
      key: index,
      className: " size-3 padding-v-30 "
    }, /*#__PURE__*/React.createElement(Option, {
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

  return /*#__PURE__*/React.createElement("abbr", {
    title: text
  }, /*#__PURE__*/React.createElement("button", {
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
  }, /*#__PURE__*/React.createElement(Icon, {
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

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

// A type of promise-like that resolves synchronously and supports only one observer

const _iteratorSymbol = /*#__PURE__*/ typeof Symbol !== "undefined" ? (Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator"))) : "@@iterator";

const _asyncIteratorSymbol = /*#__PURE__*/ typeof Symbol !== "undefined" ? (Symbol.asyncIterator || (Symbol.asyncIterator = Symbol("Symbol.asyncIterator"))) : "@@asyncIterator";

// Asynchronously call a function and send errors to recovery continuation
function _catch(body, recover) {
	try {
		var result = body();
	} catch(e) {
		return recover(e);
	}
	if (result && result.then) {
		return result.then(void 0, recover);
	}
	return result;
}

function useCamera() {
  var mediaRecorder = useRef();
  var mount = useRef(true);
  useEffect(function () {
    return function () {
      mount.current = false;
      console.log('un-mount');
    };
  }, []);

  var _useState = useState({
    mediaStream: null,
    mediaBlob: null,
    devices: [],
    log: []
  }),
      state = _useState[0],
      setstate = _useState[1];

  var getDevices = function getDevices(kind) {
    try {
      var _exit2 = false;

      var _temp3 = function _temp3(_result2) {
        return _exit2 ? _result2 : [];
      };

      var _temp4 = _catch(function () {
        if (state.devices.length <= 0) {
          return Promise.resolve(navigator.mediaDevices.enumerateDevices()).then(function (res) {
            if (mount.current) {
              setstate(_extends({}, state, {
                devices: res
              }));
              _exit2 = true;
              return res.filter(function (element) {
                return element.kind === kind;
              });
            }
          });
        } else {
          _exit2 = true;
          return state.devices.filter(function (element) {
            return element.kind === kind;
          });
        }
      }, function (err) {
        console.log(err);
      });

      return Promise.resolve(_temp4 && _temp4.then ? _temp4.then(_temp3) : _temp3(_temp4));
    } catch (e) {
      return Promise.reject(e);
    }
  };

  var outputFormatVideos = [{
    key: 'video/webm;codecs=vp8,opus',
    value: 'WebM (.webm)'
  }, {
    key: 'video/mp4',
    value: 'MPEG-4 (.mp4)'
  }];

  var getVideoSource = function getVideoSource() {
    return Promise.resolve(getDevices('videoinput'));
  };

  var getAudioInputSource = function getAudioInputSource() {
    return Promise.resolve(getDevices('audioinput'));
  };

  var getAudioOutputDestination = function getAudioOutputDestination() {
    return Promise.resolve(getDevices('audiooutput'));
  };

  var power_off = 'Power OFF\n';
  var power_on = 'Power ON\n';
  var camera_off = 'Camera OFF!\n';
  var camera_on = 'Camera ON!\n';
  var recording = 'Recording!\n';
  var not_recording = 'Not recording!\n';
  var start_recording = 'Start recording\n';
  var stop_recording = 'Stop recording\n';
  var clear_video = 'Clear video\n';

  var getLog = function getLog(text) {
    var d = new Date();
    var value = d.toTimeString().substr(0, 8) + " - " + text;
    return [value].concat(state.log);
  };

  var validateOnCamera = function validateOnCamera() {
    if (state.mediaStream) {
      if (mount.current) {
        setstate(_extends({}, state, {
          log: getLog(camera_on)
        }));
      }

      console.log(camera_on);
      return true;
    }

    return false;
  };

  var validateOffCamera = function validateOffCamera() {
    if (!state.mediaStream) {
      if (mount.current) {
        setstate(_extends({}, state, {
          log: getLog(camera_off)
        }));
      }

      console.log(camera_off);
      return true;
    }

    return false;
  };

  var validateOnRecording = function validateOnRecording() {
    if (mediaRecorder && mediaRecorder.current && mediaRecorder.current.state !== 'inactive') {
      return true;
    } else {
      if (mount.current) {
        setstate(_extends({}, state, {
          log: getLog(not_recording)
        }));
      }

      console.log(not_recording);
      return false;
    }
  };

  var validateOffRecording = function validateOffRecording() {
    if (mediaRecorder && (!mediaRecorder.current || mediaRecorder.current.state === 'inactive')) {
      return true;
    } else {
      if (mount.current) {
        setstate(_extends({}, state, {
          log: getLog(recording)
        }));
      }

      console.log(recording);
      return false;
    }
  };

  var onCamera = function onCamera(requestedMedia) {
    try {
      var _exit4 = false;
      var on = validateOnCamera();

      var _temp6 = function () {
        if (!on) {
          return _catch(function () {
            return Promise.resolve(navigator.mediaDevices.getUserMedia(requestedMedia)).then(function (stream) {
              if (mount.current) {
                setstate(_extends({}, state, {
                  mediaBlob: null,
                  mediaStream: stream,
                  log: getLog(power_on)
                }));
              }

              console.log(power_on);
              _exit4 = true;
              return true;
            });
          }, function (err) {
            console.log(err);
          });
        }
      }();

      return Promise.resolve(_temp6 && _temp6.then ? _temp6.then(function (_result4) {
        return _exit4 ? _result4 : false;
      }) : _exit4 ? _temp6 : false);
    } catch (e) {
      return Promise.reject(e);
    }
  };

  var offCamera = function offCamera() {
    var off = validateOffCamera();

    if (!off) {
      try {
        state.mediaStream.getTracks().forEach(function (track) {
          track.stop();
        });

        if (mount.current) {
          setstate(_extends({}, state, {
            mediaStream: null,
            log: getLog(power_off)
          }));
        }

        console.log(power_off);
        return true;
      } catch (err) {
        console.log(err);
      }
    }

    return false;
  };

  var startRecording = function startRecording() {
    var off = validateOffCamera();

    if (!off) {
      var record = validateOffRecording();

      if (record) {
        mediaRecorder.current = new MediaRecorder(state.mediaStream);

        mediaRecorder.current.onerror = function (e) {
          console.log('error', e);
        };

        mediaRecorder.current.start();

        if (mount.current) {
          setstate(_extends({}, state, {
            mediaBlob: null,
            log: getLog(start_recording)
          }));
        }

        console.log(start_recording);
        return true;
      }
    }

    return false;
  };

  var stopRecording = function stopRecording(outputFormat) {
    var off = validateOffCamera();

    if (!off) {
      var record = validateOnRecording();

      if (record) {
        if (mediaRecorder.current.state !== 'inactive') {
          mediaRecorder.current.stop();
          state.mediaStream.current && state.mediaStream.current.getTracks().forEach(function (track) {
            return track.stop();
          });
        }

        mediaRecorder.current.ondataavailable = function (e) {
          var outFile = outputFormat ? new Blob([e.data], {
            type: outputFormat
          }) : e.data;

          if (mount.current) {
            setstate(_extends({}, state, {
              mediaBlob: outFile,
              log: getLog(stop_recording)
            }));
          }
        };

        console.log(stop_recording);
        return true;
      }
    }

    return false;
  };

  var removeMediaBlob = function removeMediaBlob() {
    if (mount.current) {
      setstate(_extends({}, state, {
        mediaBlob: null,
        log: getLog(clear_video)
      }));
    }

    console.log(clear_video);
    return true;
  };

  return {
    mediaStream: state.mediaStream,
    startRecording: startRecording,
    stopRecording: stopRecording,
    onCamera: onCamera,
    offCamera: offCamera,
    removeMediaBlob: removeMediaBlob,
    mediaBlob: state.mediaBlob,
    getVideoSource: getVideoSource,
    getAudioInputSource: getAudioInputSource,
    getAudioOutputDestination: getAudioOutputDestination,
    log: state.log,
    outputFormatVideos: outputFormatVideos,
    mount: mount,
    validateOnCamera: validateOnCamera,
    validateOffCamera: validateOffCamera,
    validateOnRecording: validateOnRecording,
    validateOffRecording: validateOffRecording
  };
}

export default UI;
export { constant as CONSTANT, functions, useCamera };
//# sourceMappingURL=index.modern.js.map
