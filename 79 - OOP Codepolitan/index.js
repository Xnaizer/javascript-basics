const hex = (r, g, b) => {
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

const rgb = (r, g, b) => {
    return `rgb(${r},${g},${b})`;
}

function convertColor(r, g, b){
    const color = {};

    color.r = r;
    color.g = g;
    color.b = b;

    color.rgb = function () {
        const { r, g, b} = this;
        // return `rgb(${this.r},${this.g},${this.b})`;
        return `rgb(${r},${g},${b})`;
    };

    color.hex = function() {
        const { r, g, b} = this;
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    };

    return color
}

console.log(convertColor(255, 255, 255));

const color = convertColor(255, 255, 255);
console.log(color.rgb());
console.log(color.hex());

function Colors(r, g, b){
    this.r = r;
    this.g = g;
    this.b = b;
}

Colors.prototype.rgb = function (){
    const { r, g, b} = this;
    // return `rgb(${this.r},${this.g},${this.b})`;
    return `rgb(${r},${g},${b})`;
}

console.log(new Colors(11,234,63));
console.log(new Colors(11,234,63).rgb());

Colors.prototype.rgba = function (a = 1.0 ) {
    const { r, g, b} = this;
    return `rgba(${r},${g},${b},${a})`;
}