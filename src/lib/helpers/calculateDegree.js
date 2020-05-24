export default function calculateDegree(x, y, centerX, centerY) {
    const radians = Math.atan2(x - centerX, y - centerY);
    return (radians * (180 / Math.PI) * -1) + 180;
}
