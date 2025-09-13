//complete this code
class Animal {
	constructor Animal(species){
		this.species=species;
	}
	get spc(species){
		reurun this.species;
	}
	makeSound(){
    console.log(`The ${this._species} makes a sound`);
  }
}

class Dog extends Animal {
	 purr(){
    console.log("purr");
  }
}

class Cat extends Animal {
	bark(){
    console.log("woof");
  }
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
