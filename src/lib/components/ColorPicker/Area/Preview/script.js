import { generateSolidStyle, generateGradientStyle } from "@/lib/helpers";

export default {
    name: "area-preview",

    props: {
        isGradient: Boolean,
        red: Number,
        green: Number,
        blue: Number,
        alpha: Number,
        points: Array,
        gradientDegree: Number,
        gradientType: String,
    },

    computed: {
        style() {
            if (this.isGradient) {
                const style = generateGradientStyle(this.points, this.gradientType, this.gradientDegree)

                return { background: style };
            }

            const style = generateSolidStyle(this.red, this.green, this.blue, this.alpha);

            return { backgroundColor: style };
        }
    }
}
