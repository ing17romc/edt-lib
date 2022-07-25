export const BUTTON_PROPS = {
    ID: 'button',
    TITLE: 'Button'
}
export const CHECK_BUTTON_PROPS = {
    ID: 'checkbutton',
    LABEL: 'One',
    VALUE: false,
}
export const DATE_PICKER_PROPS = {
    ID: 'datepicker',
    TITLE: 'Date',
    VALUE: new Date().toString()
}
export const IMAGE_BUTTON_PROPS = {
    ID: 'imagebutton',
    TEXT: 'ImageButton'
}
export const RADIO_BUTTON_PROPS = {
    NAME: 'radioButton',
    VALUE: 'rb2',
    OPTIONS: {
        ONE: {
            ID: 'rb1',
            LABEL:'One'
        },
        TWO: {
            ID: 'rb2',
            LABEL:'Two'
        }
    }
}
export const SELECTOR_PROPS = {
    ID: 'selector',
	TITLE_TOP: 'Top title',
	TITLE_BOTTOM: 'Bottom title',
	VALUE: '',
    OPTIONS: [
        {
            value: 'Select...',
            key: ''
        },
        {
            value: 'One',
            key: 'one'
        },
        {
            value: 'Two',
            key: 'two'
        }
    ]
}
export const SPINNER_PROPS = {
    SHOW: true
}
export const TEXT_AREA_PROPS = {
    ID: 'textarea',
    TITLE: 'Title',
    PLACEHOLDER: 'Placeholder',
    VALUE: 'This is a example'
}
export const TEXT_BOX_PROPS = {
    ID: 'textbox',
	TITLE_TOP: 'Top title',
	TITLE_BOTTOM: 'Bottom title',
    PLACEHOLDER: 'Placeholder',
    VALUE: 'This is a example'
}
export const TEXT_BUTTON_PROPS = {
    ID: 'textbutton',
    TEXT: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultricies vitae quam et tristique. In et nisl in ligula posuere elementum. Maecenas id rhoncus risus. Pellentesque condimentum erat a lacus varius, aliquet euismod lacus porta. Proin vitae lectus congue mauris facilisis sollicitudin nec in sem. Donec laoreet sed felis ut cursus. Quisque commodo elit non dictum cursus. Suspendisse a turpis maximus, lobortis purus sit amet, pretium odio.'
}
export const TITLE_PROPS = {
    LABEL: 'Title',
    SECUNDARY: false
}
