import { getAlpha } from "@/lib/helpers";
import { useMouseEvents } from "@/lib/hooks";

export default {
    name: "alpha",

    props: {
        red: Number,
        green: Number,
        blue: Number,
        alpha: Number,
        updateColor: Function,
    },

    data() {
        return {
            width: 0,
            mouseEvents: () => {},
        }
    },

    mounted() {
        const { alphaMaskRef } = this.$refs;

        if (alphaMaskRef) {
            this.width = alphaMaskRef.clientWidth;
        }

        this.mouseEvents = useMouseEvents(this.mouseDownHandler, this.mouseMoveHandler, this.mouseUpHandler);
    },

    computed: {
        offsetLeft() {
            return ((this.alpha * this.width) | 0) - 6;
        },

        pointerStyle() {
            return {left: `${this.offsetLeft}px`,}
        },

        style() {
            return {
                background: `linear-gradient(to right, rgba(0, 0, 0, 0), rgb(${this.red}, ${this.green}, ${this.blue}))`,
            }
        }
    },

    methods: {
        mouseDownHandler(event) {
            const elementX = event.currentTarget.getBoundingClientRect().x;
            const startX = event.pageX;
            const positionX = startX - elementX;

            this.updateColor({ alpha: getAlpha(positionX, this.width) }, 'onStartChange');

            return {
                startX,
                positionX,

            };
        },

        changeObjectPositions(event, { startX, positionX }) {
            const moveX = event.pageX - startX;
            positionX += moveX;

            const alpha = getAlpha(positionX, this.width);

            return {
                positions: {
                    positionX,
                    startX: event.pageX,
                },
                alpha,
            };
        },

        mouseMoveHandler(event, { startX, positionX }) {
            const { positions, alpha } = this.changeObjectPositions(event, { startX, positionX });

            this.updateColor({ alpha }, 'onChange');

            return positions;
        },

        mouseUpHandler(event, { startX, positionX, }) {
            const { positions, alpha } = this.changeObjectPositions(event, { startX, positionX });

            this.updateColor({ alpha }, 'onEndChange');

            return positions;
        },
    }
}
