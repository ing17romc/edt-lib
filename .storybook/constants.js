import { SIZE_CONTROL, STYLE_CONTROL, ICONS } from '../src/components/utils/constant'
import { jsonToArray } from '../src/components/utils/functions'

const SIZE_OPTIONS = jsonToArray(SIZE_CONTROL)

export const ID = {
    description: 'Text to specify a unique.',
    control: { type: 'text' }
}
export const TITLE = {
    description: 'Text to display in the component.',
    control: { type: 'text' }
}
export const TEXT = {
    description: 'Text to display in the component.',
    control: { type: 'text' }
}
export const DISABLED = {
    description: 'Boolean value to show the component with disabled style.',
    control: 'boolean',
    defaultValue: false,
    table: {
        defaultValue: { summary: false }
      },
}
export const ON_CLICK = {
    description: "Function that is executed when the button's onClick event is fired.",
    control: { type: 'func' },
    defaultValue: {},
    action: 'clicked'
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
    description: 'none',
    defaultValue: ICONS[0],
    table: {
        type: { 
            summary: 'string'
        },
    },
    options: ICONS,
    control: { type: 'select' }
}

const CONSTANT = {
    ID,
    TITLE,
    TEXT,
    DISABLED,
    ON_CLICK,
    SIZE,
    TYPE,
    ICON
}


export default CONSTANT
