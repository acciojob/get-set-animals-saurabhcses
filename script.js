class Animal {
  constructor(species) {
    this._species = species;
  }

  // Getter
  get species() {
    return this._species;
  }

  // Method
  makeSound() {
    console.log(`The ${this._species} makes a sound`);
  }
}

class Cat extends Animal {
  purr() {
    console.log("purr");
  }
}

class Dog extends Animal {
  bark() {
    console.log("woof");
  }
}

// Do not change the code below this line
window.Animal = Animal;
window.Cat = Cat;
window.Dog = Dog;
