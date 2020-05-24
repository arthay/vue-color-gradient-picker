import RGBItem from './RGBItem';
import { rgbToHsv } from "@/lib/helpers";

export default {
    name: "RGB",

    props: {
        red: Number,
        green: Number,
        blue: Number,
        alpha: Number,
        updateColor: Function,
    },

    components: {
        RGBItem
    },

    methods: {
        changeValue(field, value) {
            if (field === 'alpha') {
                this.updateColor({ alpha: value / 100 });

                return;
            }

            const color = rgbToHsv({
                red: this.red, green: this.green, blue: this.blue, [field]: value,
            });

            this.updateColor({ ...color, [field]: value });
        },
    }
};
