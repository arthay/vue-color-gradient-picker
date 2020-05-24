import hsvToRgb from './hsvToRgb';

export default function changePicker(x, y, height, width, hue) {
    if (x > width) x = width;
    if (y > height) y = height;
    if (x < 0) x = 0;
    if (y < 0) y = 0;
    const value = 100 - (y * 100 / height) | 0;
    const saturation = x * 100 / width | 0;
    return {
        ...hsvToRgb(hue, saturation, value),
        saturation,
        value,
    };
}
