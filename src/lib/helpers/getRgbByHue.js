export default function getRgbByHue(hue) {
    let C = 1;
    const H = hue / 60;
    let X = C * (1 - Math.abs(H % 2 - 1));
    const m = 0;
    const precision = 255;
    let r = 0;
    let g = 0;
    let b = 0;

    C = (C + m) * precision | 0;
    X = (X + m) * precision | 0;

    if (H >= 0 && H < 1) {
        r = C | 0;
        g = X | 0;
        b = m | 0;
    }
    if (H >= 1 && H < 2) {
        r = X | 0;
        g = C | 0;
        b = m | 0;
    }
    if (H >= 2 && H < 3) {
        r = m | 0;
        g = C | 0;
        b = X | 0;
    }
    if (H >= 3 && H < 4) {
        r = m | 0;
        g = X | 0;
        b = C | 0;
    }
    if (H >= 4 && H < 5) {
        r = X | 0;
        g = m | 0;
        b = C | 0;
    }
    if (H >= 5 && H <= 6) {
        r = C | 0;
        g = m | 0;
        b = X | 0;
    }

    return {
        red: r,
        green: g,
        blue: b,
    };
}
