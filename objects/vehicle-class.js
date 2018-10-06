'use strict';

class Car {
  drive() {
    console.log('moving forward');
  };
};
const carOne = new Car();
console.log(carOne.drive());

module.exports = Car;
