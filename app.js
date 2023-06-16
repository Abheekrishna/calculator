class CALCULATOR {
    constructor() {
        this.total = 0;
    }

    add(a, b) {
       this.total = a + b;
    }

    subtraction(a, b) {
        this.total = a - b;
    }

    multiplication (a, b) {
        this.total = a * b;
    }

    division(a, b) {
        if(a > 0 && b > 0) {
            this.total = a / b;
        } else {
            return;
        }
    }
}

const basic = new CALCULATOR();

basic.division(15, 5);
console.log(basic.total)