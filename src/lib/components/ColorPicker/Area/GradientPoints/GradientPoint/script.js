import { useMouseEvents } from "@/lib/hooks";
import { updateGradientActivePercent } from "@/lib/helpers";

export default {
    name: "GradientPoint",

    props: {
        point: Object,
        activePointIndex: Number,
        index: Number,
        width: Number,
        positions: Object,
        changeActivePointIndex: Function,
        updateGradientLeft: Function,
        removePoint: Function,
    },

    data() {
        return {
            mouseEvents: () => {},
        }
    },

    mounted() {
        this.mouseEvents = useMouseEvents(this.mouseDownHandler, this.mouseMoveHandler, this.mouseUpHandler);
    },

    computed: {
        activeClassName() {
            return this.activePointIndex === this.index ? ' active' : '';
        },

        pointStyle() {
            return { left: `${(this.point.left * (this.width / 100)) - 6}px`, }
        }
    },

    methods: {
        mouseDownHandler(event) {
            this.changeActivePointIndex(this.index);

            const startX = event.pageX;
            const startY = event.pageY;
            const offsetX = startX - this.positions.x;

            this.updateGradientLeft(this.point.left, this.index, 'onStartChange');

            return {
                startX,
                startY,
                offsetX,

            };
        },

        changeObjectPositions(event, { startX, offsetX }) {
            const moveX = event.pageX - startX;
            offsetX += moveX;
            // update point percent
            const left = updateGradientActivePercent(offsetX, this.width);

            return {
                positions: {
                    offsetX,
                    startX: event.pageX,
                },
                left,
            };
        },

        mouseMoveHandler(event, { startX, offsetX }) {
            const { positions, left } = this.changeObjectPositions(event, { startX, offsetX });

            this.updateGradientLeft(left, this.index, 'onChange');

            return positions;
        },

        mouseUpHandler(event, { startX, offsetX, }) {
            const { positions, left } = this.changeObjectPositions(event, { startX, offsetX });

            this.updateGradientLeft(left, this.index, 'onEndChange');

            return positions;
        },
    }
};
