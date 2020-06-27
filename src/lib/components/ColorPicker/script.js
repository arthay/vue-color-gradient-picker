import Vue from 'vue';
import { Plugin } from "vue-fragment";

import Solid from './Solid';
import Gradient from './Gradient';

Vue.use(Plugin);

export default {
    name: "ColorPicker",

    props: {
        isGradient: {
            type: Boolean,
            default: false,
        },
        color: {
            type: Object,
            default: () => ({
                red: 255,
                green: 0,
                blue: 0,
                alpha: 1,
                hue: 0,
                saturation: 100,
                value: 100,
            })
        },

        gradient: {
            type: Object,
            default: () => ({
                type: 'linear',
                degree: 0,
                points: [
                    {
                        left: 0,
                        red: 0,
                        green: 0,
                        blue: 0,
                        alpha: 1,
                    },
                    {
                        left: 100,
                        red: 255,
                        green: 0,
                        blue: 0,
                        alpha: 1,
                    },
                ],
            })
        },

        onStartChange: {
            type: Function,
            default: () => {}
        },
        onChange: {
            type: Function,
            default: () => {}
        },
        onEndChange: {
            type: Function,
            default: () => {}
        },
    },

    components: {
        Solid,
        Gradient
    }
};
