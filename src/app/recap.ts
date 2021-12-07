const username: string = 'BlackFire';
const num: string | number = 1;

const sum = (a: number, b:number) => {
  return a + b;
}

sum(1, 2);

class Person{
  private age: number;
  private name: string;

  constructor(age:number, name:string){
    this.age = age;
    this.name = name;
  }
}

const nico = new Person(22, "BlackFire");
