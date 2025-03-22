
class Car {
    constructor(brand, model) {
        this._brand = brand;
        this._model = model;

        console.log(this._brand)
        console.log(this.model)

    }
    get brand() {
        return this._brand;
    }

    set brand(newBrand) {
        this._brand = newBrand;
    }

    displayInfo() {
        console.log(`Car: ${this._brand}, Model: ${this._model}`);
    }
}

const car1 = new Car("Toyota", "Corolla");

car1.brand = "Honda"; 
car1.brand = "suzuki"
console.log(car1.brand); 