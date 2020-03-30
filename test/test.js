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

$(function() {
  let x;
  const myFunc = num => {
    for (let i = 0; i < num; i++) console.log(i);
  };

  const result = (x = 3, x++, myFunc(x), x * 2);
  console.log(`result: ${result}`);
});
