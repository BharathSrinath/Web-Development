class Pet3 {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	eat3() {
		return `${this.name} is eating!`;
	}
}
class Cat3 extends Pet3 {
	constructor(name, age, livesLeft = 9) {
		super(name, age);
		this.livesLeft = livesLeft;
	}
	meow3() {
		return 'MEOWWWW!!';
	}
}
class Dog3 extends Pet3 {
	bark3() {
		return 'WOOOF!!';
	}
	eat3() {
		return `${this.name} scarfs his food!`;
	}
}
const animal5 = new Cat3 ('Puchy', 11);
console.log(animal5.eat3());
console.log(animal5.meow3());

const animal6 = new Dog3 ('Mac', 7);
console.log(animal6.eat3());
console.log(animal6.bark3());