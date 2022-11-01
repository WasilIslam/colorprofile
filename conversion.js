//this file will control the conversion.
//currently it works on the generic conversion formula.







function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}








var cmyk2rgb = function (c, m, y, k, normalized) {
    c = (c / 100);
    m = (m / 100);
    y = (y / 100);
    k = (k / 100);

    c = c * (1 - k) + k;
    m = m * (1 - k) + k;
    y = y * (1 - k) + k;

    var r = 1 - c;
    var g = 1 - m;
    var b = 1 - y;

    if (!normalized) {
        r = Math.round(255 * r);
        g = Math.round(255 * g);
        b = Math.round(255 * b);
    }

    return { r, g, b }
}

module.exports = { cmyk2rgb, componentToHex, rgbToHex }