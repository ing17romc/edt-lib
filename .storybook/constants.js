import { SIZE_CONTROL, STYLE_CONTROL, ICONS } from '../src/components/utils/constant'
import { jsonToArray } from '../src/components/utils/functions'

const SIZE_OPTIONS = jsonToArray(SIZE_CONTROL)


export const SIZE_TEXT_BOX = {
    defaultValue: 200,
    description: 'Number value to maximum character length.',
    control: { type: 'number' }
}
export const ROWS_TEXT_AREA = {
    defaultValue: 2,
    description: 'Number value to pecifies the visible height of a text area, in lines.',
    control: { type: 'number' }
}
export const REF = {
    defaultValue: null,
    description: 'Access DOM nodes directly within React.',
    table: {
        type: { 
            summary: 'object'
        },
        defaultValue: { summary: 'null' }
      }
}



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
export const ID = {
    ...STRING,
    description: 'Text to specify a unique.'
}
export const TITLE = {
    ...STRING,
    description: 'Title to display in the component.'
}
export const TEXT = {
    ...STRING,
    description: 'Text to display in the component.'
}
export const LABEL = {
    ...STRING,
    description: 'Label to display in the component.'
}
export const TITLE_TOP = {
    ...STRING,
    description: 'Text to component top title.'
}
export const PLACEHOLDER = {
    ...STRING,
    description:  'Text to component placeholder.'
}
export const TITLE_BOTTOM = {
    ...STRING,
    description: 'Text to component bottom title.'
}
export const TEXT_VALUE = {
    ...STRING,
    description: 'Value handled by the component.'
}
export const TEXT_IMAGEN_BUTTON = {
    ...STRING,
    description: 'Text to display in the component when you mouse over the element'
}
export const ID_RADIO_BUTTON = {
    ...STRING,
    description: 'Text to specify only one. for this component the id will be used as the value that is selected in a group of RadioButtons'
}
export const NAME_RADIO_BUTTON = {
    ...STRING,
    description: 'Text to specify the name of component. to group a set of RadioButtons this attribute must be used.'
}
export const VALUE_RADIO_BUTTON = {
    ...STRING,
    description: 'Value handled by the component. to select the radio button the value must be equal to the same as the id attribute.'
}


const BOOLEAN = {
    description: '',
    control: 'boolean',
    defaultValue: false,
    table: {
        defaultValue: { summary: false }
      },
}
export const DISABLED= {
    ...BOOLEAN,
    description: 'Boolean value to show the component with disabled style.'
}
export const REQUIRED= {
    ...BOOLEAN,
    description: 'Boolean value to show the component with required style.',
}
export const READ_ONLY= {
    ...BOOLEAN,
    description: 'Boolean value to show the component read only.',
}
export const NO_PASTE= {
    ...BOOLEAN,
    description: 'Boolean value to allow paste value.',
}
export const NO_COPY= {
    ...BOOLEAN,
    description: 'Boolean value to allow copy value.',
}
export const SECUNDARY_TITLE= {
    ...BOOLEAN,
    description: 'Boolean value to show the component with secundary title.',
}
export const CHECKED= {
    ...BOOLEAN,
    description: 'Boolean value to show the component with checked style (by default it is false).',
}
export const SHOW= {
    ...BOOLEAN,
    description: 'Boolean value to show the component (by default it is false).',
}



export const OPTIONES_SELECTOR= {
    description: 'List of options the component.',
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
export const ON_CLICK = {
    ...EVENT,
    description: 'Function that is executed when the onClick event fires. To use the Button Component within a form the onClick property must not be defined.'
}
export const EVENT_CHANGE = {
    ...EVENT,
    description: 'Function that will be invoked when there is a change.'
}
export const EVENT_FOCUS = {
    ...EVENT,
    description: 'Function that will be invoked when the component is focused.'
}
export const EVENT_BLUR = {
    ...EVENT,
    description: 'Function that will be invoked when the component is out of focus.'
}
export const EVENT_KEY_DOWN = {
    ...EVENT,
    description: 'Function that will be invoked when the key is down.'
}



export const SIZE = {
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
export const TYPE = {
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
export const ICON = {
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
