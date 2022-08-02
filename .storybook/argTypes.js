import { SIZE_CONTROL, STYLE_CONTROL, ICONS, TYPE_NOTIFICATION } from '../src/components/utils/constant'
import { jsonToArray } from '../src/components/utils/functions'

const SIZE_OPTIONS = jsonToArray(SIZE_CONTROL)



const STRING = {
    defaultValue: '',
    control: { type: 'text' },
    table: {
        type: { 
            summary: 'text'
        },
        defaultValue: { summary: '' }
      }
    
}
const ID = {
    ...STRING,
    description: 'Text to specify a unique.'
}
const TITLE = {
    ...STRING,
    description: 'Title to display in the component.'
}
const TEXT = {
    ...STRING,
    description: 'Text to display in the component.'
}
const LABEL = {
    ...STRING,
    description: 'Label to display in the component.'
}
const TITLE_TOP = {
    ...STRING,
    description: 'Text to component top title.'
}
const PLACEHOLDER = {
    ...STRING,
    description:  'Text to component placeholder.'
}
const TITLE_BOTTOM = {
    ...STRING,
    description: 'Text to component bottom title.'
}
const TEXT_VALUE = {
    ...STRING,
    description: 'Value handled by the component.'
}



const BOOLEAN = {
    description: '',
    control: 'boolean',
    defaultValue: false,
    table: {
        defaultValue: { summary: false }
      },
}
const DISABLED= {
    ...BOOLEAN,
    description: 'Boolean value to show the component with disabled style.'
}
const REQUIRED= {
    ...BOOLEAN,
    description: 'Boolean value to show the component with required style.',
}
const READ_ONLY= {
    ...BOOLEAN,
    description: 'Boolean value to show the component read only.',
}
const NO_PASTE= {
    ...BOOLEAN,
    description: 'Boolean value to allow paste value.',
}
const NO_COPY= {
    ...BOOLEAN,
    description: 'Boolean value to allow copy value.',
}
const SHOW= {
    ...BOOLEAN,
    description: 'Boolean value to show the component (by default it is false).',
}



const EVENT = {
    control: { type: 'func' },
    action: 'event_occurred',
    table: {
        type: { 
            summary: 'func'
        },
        defaultValue: { summary: 'undefined' }
      }
}
const ON_CLICK = {
    ...EVENT,
    description: 'Function that is executed when the onClick event fires. To use the Button Component within a form the onClick property must not be defined.'
}
const EVENT_CHANGE = {
    ...EVENT,
    description: 'Function that will be invoked when there is a change.'
}
const EVENT_FOCUS = {
    ...EVENT,
    description: 'Function that will be invoked when the component is focused.'
}
const EVENT_BLUR = {
    ...EVENT,
    description: 'Function that will be invoked when the component is out of focus.'
}
const EVENT_KEY_DOWN = {
    ...EVENT,
    description: 'Function that will be invoked when the key is down.'
}
const EVENT_MODAL = {
    ...EVENT,
    description: 'Function that is executed to close or open the Modal.'
}



const SIZE = {
    description: 'Larger or smaller button value.',
    defaultValue: SIZE_CONTROL.MD,
    table: {
        type: { 
            summary: 'string'
        },
        defaultValue: { summary: SIZE_CONTROL.MD }
      },
    options: jsonToArray(SIZE_CONTROL),
    control: { type: 'inline-radio' }
}
const TYPE = {
    description: 'String value to style of button.',
    defaultValue: STYLE_CONTROL.PRIMARY,
    table: {
        type: { 
            summary: 'string'
        },
        defaultValue: { summary: STYLE_CONTROL.PRIMARY },
        options:  { summary: STYLE_CONTROL },
    },
    options: jsonToArray(STYLE_CONTROL),
    control: { type: 'inline-radio' }
}
const REF = {
    defaultValue: null,
    description: 'Access DOM nodes directly within React.',
    table: {
        type: { 
            summary: 'object'
        },
        defaultValue: { summary: 'null' }
      }
}


// SPECIFIC COMPONENTS
export const BUTTON = {
    ID,
    TITLE,
    DISABLED,
    SIZE,
    TYPE,
    ON_CLICK
}
export const CHECK_BUTTON = {
	ID,
	LABEL,
	DISABLED,
	REQUIRED,
	READ_ONLY,
	EVENT_CHANGE,
	REF,
    CHECKED: {
        ...BOOLEAN,
        description: 'Boolean value to show the component with checked style (by default it is false).',
    },
}
export const DATE_PICKER = {
	ID,
	TITLE,
	VALUE: TEXT_VALUE,
	DISABLED,
	REQUIRED,
	READ_ONLY,
	EVENT_CHANGE,
	REF
}
export const ICON = {
    SIZE,
	ICON: {
        description: 'String value for the icon name',
        defaultValue: ICONS[0],
        table: {
            type: { 
                summary: 'string'
            },
        },
        options: ICONS,
        control: { type: 'select' }
    }
}
export const IMAGE_BUTTON = {
    ID,  
    DISABLED, 
    ON_CLICK,
    TEXT: {
        ...STRING,
        description: 'Text to display in the component when you mouse over the element'
    },
    ...ICON
}
export const MODAL = {
    SHOW,
    EVENT_MODAL,
    CHILDREN: {
        description: 'Content the modal. This content can be: 1) Components; 2) Elements like paragraphs, div, headers (H2,H3,etc); 3) Texts; 4) JavaScript Expressions as Templete Strings; 5) Operations; 6) Functions; 7) Etc',
        control: { type: 'node' }
    }
}
export const MODAL_HTTP_MESSAGE = {
    SHOW,
    EVENT_MODAL,
    HTTP_CODE: {
        description: 'Indicate whether a specific HTTP request has been successfully completed.',
        control: { type: 'number' }
    },
    TITLE: {
        ...STRING,
        description: 'String to specify title of request http.'
    },
    DETAILS: {
        ...STRING,
        description: 'String to specify details of request http.'
    },
    MESSAGE: {
        ...STRING,
        description: 'String to specify message of request http.'
    }
}
export const MODAL_NOTIFICATION = {
    SHOW,
    EVENT_MODAL,
    TITLE: {
        ...STRING,
        description: 'String to specify title of notification.'
    },
    DETAILS: {
        ...STRING,
        description: 'String to specify details of notification.'
    },
    MESSAGE: {
        ...STRING,
        description: 'String to specify message of notification.'
    },
    TYPE: {
        description: 'String to specify the type.',
        defaultValue: "info",
        table: {
            type: { 
                summary: 'string'
            },
            defaultValue: { summary: "info" },
            options:  { summary: TYPE_NOTIFICATION },
        },
        options: jsonToArray(TYPE_NOTIFICATION),
        control: { type: 'inline-radio' }
    },
    EVENT_CONTINUE: {
        ...EVENT,
        description: 'Function that is executed when the onClick event fires.'
    }
}
export const MODAL_VIEWER_PDF = {
    SHOW,
    EVENT_MODAL,
    PDF: {
        ...STRING,
        description: 'Value handled by the component. to select the radio button the value must be equal to the same as the id attribute.'
    }
}
export const RADIO_BUTTON = {
    ID: {
        ...STRING,
        description: 'Text to specify only one. for this component the id will be used as the value that is selected in a group of RadioButtons'
    },
    NAME: {
        ...STRING,
        description: 'Text to specify the name of component. to group a set of RadioButtons this attribute must be used.'
    },
    VALUE: {
        ...STRING,
        description: 'Value handled by the component. to select the radio button the value must be equal to the same as the id attribute.'
    },
	LABEL,
	DISABLED,
	REQUIRED,
	READ_ONLY,
	EVENT_CHANGE,
	REF
}
export const SELECTOR = {
	ID,
	TITLE_TOP,
	TITLE_BOTTOM,
	VALUE: TEXT_VALUE,
	DISABLED,
	REQUIRED,
	READ_ONLY,
	EVENT_CHANGE,
	REF,
    OPTIONS: {
        description: 'List of options the component.',
    }
}
export const SPINNER = {
    SHOW
}
export const TEXT_AREA = {
	ID,
	TITLE,
	PLACEHOLDER,
	VALUE: TEXT_VALUE,
	DISABLED,
	REQUIRED,
	READ_ONLY,
	NO_PASTE,
	NO_COPY,
	EVENT_CHANGE,
	EVENT_FOCUS,
	EVENT_BLUR,
	EVENT_KEY_DOWN,
	REF,
    ROWS: {
        defaultValue: 2,
        description: 'Number value to pecifies the visible height of a text area, in lines.',
        control: { type: 'number' }
    }
}
export const TEXT_BOX = {
	ID,
	TITLE_TOP,
	PLACEHOLDER,
	TITLE_BOTTOM,
	VALUE: TEXT_VALUE,
	DISABLED,
	REQUIRED,
	READ_ONLY,
	NO_PASTE,
	NO_COPY,
	EVENT_CHANGE,
	EVENT_FOCUS,
	EVENT_BLUR,
	EVENT_KEY_DOWN,
	SIZE: {
        defaultValue: 200,
        description: 'Number value to maximum character length.',
        control: { type: 'number' }
    },
	REF
}
export const TEXT_BUTTON = {
    ID, 
    TEXT, 
    DISABLED, 
    TYPE, 
    ON_CLICK 
}
export const TITLE_COMPONENT = {
    LABEL,
    SECUNDARY: {
        ...BOOLEAN,
        description: 'Boolean value to show the component with secundary title.',
    }
}