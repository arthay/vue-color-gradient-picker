export default function getRightValue(newValue, oldValue) {
    return (!newValue && newValue !== 0) ? oldValue : newValue;
}
