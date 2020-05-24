import { getHue } from "@/lib/helpers";
import { useMouseEvents } from "@/lib/hooks";

export default {
    name: "hue",

    props: {
        hue: Number,
        saturation: Number,
        value: Number,
        updateColor: Function,
    },

    data() {
        return {
            width: 0,
            mouseEvents: () => {},
        }
    },

    mounted() {
        const { hueRef } = this.$refs;

        if (hueRef) {
            this.width = hueRef.clientWidth;
        }

        this.mouseEvents = useMouseEvents(this.mouseDownHandler, this.mouseMoveHandler, this.mouseUpHandler);
    },

    computed: {
        offsetLeft() {
            return ((this.hue * this.width / 360) | 0) - 6;
        },

        pointerStyle() {
            return {
                left: `${this.offsetLeft}px`,
            }
        },
    },

    methods: {
        mouseDownHandler(event) {
            const elementX = event.currentTarget.getBoundingClientRect().x;
            const startX = event.pageX;
            const positionX = startX - elementX;

            const color = getHue(positionX, this.width, this.saturation, this.value);

            this.updateColor(color, 'onStartChange');

            return {
                startX,
                positionX,
            };
        },

        changeObjectPositions(event, { startX, positionX }) {
            const moveX = event.pageX - startX;
            positionX += moveX;

            // update value and saturation
            const offsetX = positionX > this.width ? this.width : positionX <= 0 ? 0 : positionX;
            const color = getHue(offsetX, this.width, this.saturation, this.value);

            return {
                positions: {
                    positionX,
                    startX: event.pageX,
                },
                color,
            };
        },

        mouseMoveHandler(event, { startX, positionX }) {
            const { positions, color } = this.changeObjectPositions(event, { startX, positionX });

            this.updateColor(color, 'onChange');

            return positions;
        },

        mouseUpHandler(event, { startX, positionX, }) {
            const { positions, color } = this.changeObjectPositions(event, { startX, positionX });

            this.updateColor(color, 'onEndChange');

            return positions;
        },
    }
}
