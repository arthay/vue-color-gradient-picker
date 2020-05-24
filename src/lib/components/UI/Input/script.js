export default {
    name: "Input",

    props: {
        value: {
            type: String | Number,
            default: '',
        },
        label: {
            type: String,
            default: '',
        },
        type: {
            type: String,
            default: 'text'
        },
        classes: {
            type: String,
            default: ''
        },
        onFocus: {
            type: Function,
            default: () => {
            }
        },
        onBlur: {
            type: Function,
            default: () => {
            }
        },
    },

    model: {
        prop: "value",
        event: "input"
    }
}
