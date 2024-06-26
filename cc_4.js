u2863-9518

// immplement EV into Car Class
class Car {
  constructor(brand, speed) {
    this.brand = brand;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.brand} accelerated to ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 10;
    console.log(`${this.brand} slowed down to ${this.speed} km/h`);
  }
}
class EV extends Car {
  constructor(brand, speed, charge) {
    super(brand, speed);
    this.charge = charge;

// charge battery method
chargeBattery(chargeTo) {
    this.charge = chargeTo;
    console.log(`${this.brand} battery charged to ${this.charge}%`);
  }

//customize accelerate method
accelerate() {
    super.accelerate();
    this.charge -= 1;
    console.log(`${this.brand} going at ${this.speed} km/h, with a charge of ${this.charge}%`);
  }
}

// Test Data
const tesla = new EV('Tesla', 120, 23);
console.log("Initial State:");
console.log(`Brand: ${tesla.brand}, Speed: ${tesla.speed} km/h, Charge: ${tesla.charge}%`);
tesla.accelerate();
tesla.brake();
tesla.chargeBattery(50);
console.log("After Operations:");
console.log(`Brand: ${tesla.brand}, Speed: ${tesla.speed} km/h, Charge: ${tesla.charge}%`);
