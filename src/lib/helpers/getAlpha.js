export default function getAlpha(value, width) {
    value = Number((value / width).toFixed(2));

    return value > 1 ? 1 : value < 0 ? 0 : value;
}
