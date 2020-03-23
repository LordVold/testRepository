class Car {
    constructor(speed) {
        this.speed = speed;
    }

    viewSpeed() {
        return `My speed is ${this.speed} km/h`;
    }
}

let audi = new Car('200');

let car1 = document.querySelector('.car1').innerText = audi.viewSpeed();

audi = new Car(300);

let car2 = document.querySelector('.car2').innerText = audi.viewSpeed();
