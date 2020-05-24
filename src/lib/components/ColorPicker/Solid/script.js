import Area from '../Area';
import Preview from '../Preview';

import { rgbToHsv, getRightValue, generateSolidStyle } from '@/lib/helpers';

export default {
    name: "Solid",

    props: {
        red: {
            type: Number,
            default: 255
        },
        green: {
            type: Number,
            default: 0
        },
        blue: {
            type: Number,
            default: 0
        },
        alpha: {
            type: Number,
            default: 1
        },
        hue: {
            type: Number,
            default: 0
        },
        saturation: {
            type: Number,
            default: 100
        },
        value: {
            type: Number,
            default: 100
        },
        onStartChange: Function,
        onChange: Function,
        onEndChange: Function,
    },

    components: {
        Area,
        Preview,
    },

    data() {
        return {
            colorRed: this.red,
            colorGreen: this.green,
            colorBlue: this.blue,
            colorAlpha: this.alpha,
            colorHue: 0,
            colorSaturation: 100,
            colorValue: 100,
            actions: {
                onStartChange: this.onStartChange,
                onChange: this.onChange,
                onEndChange: this.onEndChange,
            }

        }
    },

    mounted() {
        const { hue, saturation, value } = rgbToHsv({ red: this.colorRed, green: this.colorGreen, blue: this.colorBlue });

        this.colorHue = hue;
        this.colorSaturation = saturation;
        this.colorValue = value;
    },

    methods: {
        updateColor({ red, green, blue, alpha, hue, saturation, value }, actionName = 'onChange') {
            red = getRightValue(red, this.colorRed);
            green = getRightValue(green, this.colorGreen);
            blue = getRightValue(blue, this.colorBlue);
            alpha = getRightValue(alpha, this.colorAlpha);
            hue = getRightValue(hue, this.colorHue);
            saturation = getRightValue(saturation, this.colorSaturation);
            value = getRightValue(value, this.colorValue);

            this.colorRed = red;
            this.colorGreen = green;
            this.colorBlue = blue;
            this.colorAlpha = alpha;
            this.colorHue = hue;
            this.colorSaturation = saturation;
            this.colorValue = value;

            const action = this.actions[actionName];

            action && action({
                red,
                green,
                blue,
                alpha,
                hue,
                saturation,
                value,
                style: generateSolidStyle(red, green, blue, alpha),
            });
        },
    }
};
