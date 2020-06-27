import { Input } from "@/lib/components/UI";

export default {
    name: "RGBItem",

    props: {
        value: String | Number,
        type: String,
        label: String,
        onChange: Function,
    },

    components: {
        Input
    },

    data() {
        return {
            inputValue: this.value,
            inProgress: false
        }
    },

    watch: {
        value: "setValue"
    },

    methods: {
        onChangeHandler(event) {
            const value = +event.target.value;

            if (Number.isNaN(value) || value.length > 3 || value < 0 || value > 255) {
                this.inputValue = this.value;

                this.$forceUpdate();

                return;
            }

            this.inputValue = event.target.value;

            this.onChange(value);
        },

        onBlur() {
            if (!this.inputValue && !this.inputValue !== 0) {
                this.inputValue = this.value;
            }

            this.inProgress = false;
        },

        setValue() {
            if (this.value !== +this.inputValue && this.inputValue !== '') {
                this.inputValue = this.value;
            }
        }
    }
};
