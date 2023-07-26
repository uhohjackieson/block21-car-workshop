// create a constructor function called Car with the properties: make, model, year

class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    getDescription() {
        return `The make of this car is ${this.make}, the model is ${this.model} and the year it was made is ${this.year}.`
    }
};

// create a subclass of Car and include a new range property ;)
class ElectricCar extends Car {
    constructor(make, model, year, range) {
        super(make, model, year);
        this.range = range;
    };
// override the get description method of the Car prototype to implement range
    getDescription() {
        return `The make of this car is ${this.make}, the model is ${this.model} and the year it was made is ${this.year}. It also has a range of ${this.range} miles.`
    }
};


// call the getDescription method on instance of ElectricCar
const car1 = new ElectricCar("Tesla", "Model S", 2019, 300);
// const car2 = new Car("Tesla", "Model S", 2019);

console.log(car1.getDescription());
// console.log(car2.getDescription());

