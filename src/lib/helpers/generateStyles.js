export function generateSolidStyle(red, green, blue, alpha) {
    return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}

export function generateGradientStyle(points, type, degree) {
    let style = '';
    const sortedPoints = points.slice();

    sortedPoints.sort((a, b) => a.left - b.left);

    if (type === 'linear') {
        style = `linear-gradient(${degree}deg,`;
    } else {
        style = 'radial-gradient(';
    }

    sortedPoints.forEach((point, index) => {
        style += `rgba(${point.red}, ${point.green}, ${point.blue}, ${point.alpha}) ${point.left}%`;

        if (index !== sortedPoints.length - 1) {
            style += ',';
        }
    });
    
    style += ')';

    return style;
}
