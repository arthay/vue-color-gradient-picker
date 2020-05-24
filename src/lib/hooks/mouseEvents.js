export default function useMouseEvents(mouseDownHandler, mouseMoveHandler, mouseUpHandler) {
    return function mouseEventsHandler(event) {
        let positions = mouseDownHandler(event);

        function onMouseMove(event) {
            positions = mouseMoveHandler(event, positions) || positions;
        }

        window.addEventListener('mousemove', onMouseMove);

        window.addEventListener('mouseup', event => {
            window.removeEventListener('mousemove', onMouseMove);

            mouseUpHandler && mouseUpHandler(event, positions);
        }, { once: true });
    };
}
