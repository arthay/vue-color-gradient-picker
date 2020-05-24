import { Input } from "@/lib/components/UI";

import { rgbToHex, hexToRgb } from "@/lib/helpers";

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
        Input
    },

    data() {
        return {
            inProgress: false,
            hexValue: rgbToHex(this.red, this.green, this.blue),
        }
    },

    computed: {
        hex() {
            return rgbToHex(this.red, this.green, this.blue)
        }
    },

    watch: {
        inProgress: "setHex",
        red: "setHex",
        green: "setHex",
        blue: "setHex",
    },

    methods: {
        setHex() {
            if (this.inProgress) {
                return;
            }

            this.hexValue = this.hex;
        },

        changeHex(event) {
            const color = hexToRgb(event.target.value);

            if (color) {
                this.updateColor(color);
            }
        }
    }
};
