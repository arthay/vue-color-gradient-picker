import Hex from './Hex';
import RGB from './RGB';

export default {
    name: "Preview",

    props: {
        red: Number,
        green: Number,
        blue: Number,
        alpha: Number,
        updateColor: Function,
    },

    components: {
        Hex,
        RGB
    }
};
