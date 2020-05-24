import GradientControls from './GradientControls';
import Preview from '../Preview';
import Area from '../Area';

import { getRightValue, rgbToHsv, generateGradientStyle } from "@/lib/helpers";

export default {
    name: "Gradient",

    props: {
        type: {
            type: String,
            default: 'linear'
        },
        degree: {
            type: Number,
            default: 0
        },
        points: {
            type: Array,
            default: () => {
                return [
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
                ];
            }
        },
        onStartChange: Function,
        onChange: Function,
        onEndChange: Function,
    },

    components: {
        GradientControls,
        Area,
        Preview
    },

    data() {
        return {
            activePointIndex: 0,
            gradientPoints: this.points,
            activePoint: this.points[0],
            colorRed: this.points[0].red,
            colorGreen: this.points[0].green,
            colorBlue: this.points[0].blue,
            colorAlpha: this.points[0].alpha,
            colorHue: 0,
            colorSaturation: 100,
            colorValue: 100,
            gradientType: this.type,
            gradientDegree: this.degree,
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

        document.addEventListener('keyup', this.keyUpHandler);
    },

    beforeDestroy() {
        document.removeEventListener('keyup', this.keyUpHandler);
    },

    methods: {
        removePoint(index = this.activePointIndex) {
            if (this.gradientPoints.length <= 2) {
                return;
            }
            console.log(this.gradientPoints);
            this.gradientPoints.splice(index, 1);


            if (index > 0) {
                this.activePointIndex = index - 1;
            }

            this.onChange && this.onChange({
                points: this.gradientPoints,
                type: this.gradientType,
                degree: this.gradientDegree,
                style: generateGradientStyle(this.gradientPoints, this.gradientType, this.gradientDegree),
            });
        },

        keyUpHandler(event) {
            if ((event.keyCode === 46 || event.keyCode === 8)) {
                this.removePoint(this.activePointIndex);
            }
        },

        changeActivePointIndex(index) {
            this.activePointIndex = index;

            this.activePoint = this.gradientPoints[index];

            const { red, green, blue, alpha } = this.activePoint;

            this.colorRed = red;
            this.colorGreen = green;
            this.colorBlue = blue;
            this.colorAlpha = alpha;

            const { hue, saturation, value } = rgbToHsv({ red, green, blue });

            this.colorHue = hue;
            this.colorSaturation = saturation;
            this.colorValue = value;
        },

        changeGradientControl({ type, degree }) {
            type = getRightValue(type, this.gradientType);
            degree = getRightValue(degree, this.gradientDegree);

            this.gradientType = type;
            this.gradientDegree = degree;

            this.onChange({
                points: this.gradientPoints,
                type: this.gradientType,
                degree: this.gradientDegree,
                style: generateGradientStyle(this.gradientPoints, this.gradientType, this.gradientDegree),
            })
        },

        updateColor({ red, green, blue, alpha, hue, saturation, value }, actionName = 'onChange') {
            red = getRightValue(red, this.colorRed);
            green = getRightValue(green, this.colorGreen);
            blue = getRightValue(blue, this.colorBlue);
            alpha = getRightValue(alpha, this.colorAlpha);
            hue = getRightValue(hue, this.colorHue);
            saturation = getRightValue(saturation, this.colorSaturation);
            value = getRightValue(value, this.colorValue);

            const localGradientPoints = this.gradientPoints.slice();

            localGradientPoints[this.activePointIndex] = {
                ...localGradientPoints[this.activePointIndex],
                red,
                green,
                blue,
                alpha,
            };

            this.colorRed = red;
            this.colorGreen = green;
            this.colorBlue = blue;
            this.colorAlpha = alpha;
            this.colorHue = hue;
            this.colorSaturation = saturation;
            this.colorValue = value;
            this.gradientPoints = localGradientPoints;

            const action = this.actions[actionName];

            action && action({
                points: localGradientPoints,
                type: this.gradientType,
                degree: this.gradientDegree,
                style: generateGradientStyle(localGradientPoints, this.gradientType, this.gradientDegree),
            });
        },

        updateGradientLeft(left, index, actionName = 'onChange') {
            this.gradientPoints[index].left = left;

            const action = this.actions[actionName];

            action && action({
                points: this.gradientPoints,
                type: this.gradientType,
                degree: this.gradientDegree,
                style: generateGradientStyle(this.gradientPoints, this.gradientType, this.gradientDegree),
            });
        },

        addPoint(left) {
            this.gradientPoints.push({
                ...this.gradientPoints[this.activePointIndex],
                left,
            });

            this.activePointIndex = this.gradientPoints.length - 1;

            this.onChange && this.onChange({
                points: this.gradientPoints,
                type: this.gradientType,
                degree: this.gradientDegree,
                style: generateGradientStyle(this.gradientPoints, this.gradientType, this.gradientDegree),
            });
        },

    }
};
