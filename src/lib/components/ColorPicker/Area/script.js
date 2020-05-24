import Picker from "./Picker";
import Preview from "./Preview";
import Hue from "./Hue";
import Alpha from "./Alpha";
import GradientPoints from "./GradientPoints";

export default {
    name: "Area",

    props: {
        isGradient: Boolean,
        red: Number,
        green: Number,
        blue: Number,
        alpha: Number,
        hue: Number,
        saturation: Number,
        value: Number,
        updateColor: Function,
        points: Array,
        degree: Number,
        type: String,
        activePointIndex: Number,
        changeGradientControl: Function,
        changeActivePointIndex: Function,
        updateGradientLeft: Function,
        addPoint: Function,
        removePoint: Function,
    },

    components: {
        Picker,
        GradientPoints,
        Preview,
        Hue,
        Alpha
    },
}
