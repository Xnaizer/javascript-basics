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



class Colours {
    constructor(r, g, b, name = "unknown"){
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
        console.log("ini constructor");
    }

    rgb() {
        const { r, g, b} = this;
        // return `rgb(${this.r},${this.g},${this.b})`;
        return `rgb(${r},${g},${b})`;
    }

    colorName() {
        console.log(`This Colour Name is ? ${this.name}`)
    }


    hex() {
        const { r, g, b} = this;
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }


}

console.log(new Colours(123,64,34,"Merah"));

const Warna = new Colours(123,64,34,"Merah") ;
console.log(Warna.hex() +" "+Warna.colorName());



class Hewan { // parents class
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    makan() {
        return `${this.name} lagi makan`;
    }
}

class Kucing extends Hewan { // child class
    // constructor(name ,age) {
    //     this.name = name;
    //     this.age = age;
    // }

    // makan() {
    //     return `${this.name} mbuh makan`;
    // }

    meong() {
        return `${this.name} meowwwww`;
    }
}

class Anjing extends Hewan{
    constructor(name ,age, lives) {
        super(name, age);
        this.lives = lives;
    }

    gukguk() {
        return `${this.name} gukkgukk`;
    }

    totalNyawa() {
        return `sisa healthnya ${lives}`;
    }
}


