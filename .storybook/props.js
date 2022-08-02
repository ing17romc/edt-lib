export const BUTTON = {
    ID: 'button',
    TITLE: 'Button'
}
export const CHECK_BUTTON = {
    ID: 'checkbutton',
    LABEL: 'One',
    CHECKED: true,
}
export const DATE_PICKER = {
    ID: 'datepicker',
    TITLE: 'Date',
    VALUE: new Date().toString()
}
export const IMAGE_BUTTON = {
    ID: 'imagebutton',
    TEXT: 'ImageButton'
}
export const RADIO_BUTTON = {
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
export const SELECTOR = {
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
export const SPINNER = {
    SHOW: true
}
export const TEXT_AREA = {
    ID: 'textarea',
    TITLE: 'Title',
    PLACEHOLDER: 'Placeholder',
    VALUE: 'This is a example'
}
export const TEXT_BOX = {
    ID: 'textbox',
	TITLE_TOP: 'Top title',
	TITLE_BOTTOM: 'Bottom title',
    PLACEHOLDER: 'Placeholder',
    VALUE: 'This is a example'
}
export const TEXT_BUTTON = {
    ID: 'textbutton',
    TEXT: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultricies vitae quam et tristique. In et nisl in ligula posuere elementum. Maecenas id rhoncus risus. Pellentesque condimentum erat a lacus varius, aliquet euismod lacus porta. Proin vitae lectus congue mauris facilisis sollicitudin nec in sem. Donec laoreet sed felis ut cursus. Quisque commodo elit non dictum cursus. Suspendisse a turpis maximus, lobortis purus sit amet, pretium odio.'
}
export const TITLE = {
    LABEL: 'Title',
    SECUNDARY: false
}
export const MODAL = {
    SHOW: true
}
export const MODAL_VIEWER_PDF = {
    SHOW: true,
    PDF: 'http://www.africau.edu/images/default/sample.pdf'
}
export const MODAL_HTTP_MESSAGE = {
    SHOW: true,
    CODE: 404,
    TITLE: 'Title of the http request (Ex: Not Found)',
	DETAILS: 'Detail of the http request',
	MESSAGE: 'Http request message'
}
export const MODAL_NOTIFICATION = {
    SHOW: true,
    TYPE: 'info',
    TITLE: 'Title of notification',
    DETAILS: 'Detail of notification',
	MESSAGE: 'Message of notification'
}
