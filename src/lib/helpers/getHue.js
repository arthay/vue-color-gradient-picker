import { hsvToRgb } from './index';

export default function getHue(offsetX, width, saturation, value) {
    let hue = ((360 * offsetX) / width) | 0;

    hue = hue < 0 ? 0 : hue > 360 ? 360 : hue;

    return {
        ...hsvToRgb(hue, saturation, value),
        hue,
    };
}
