import { lazy } from "react";

let foo2 = "name";
foo2 = null;





let id: number = 5;
let isActive: boolean = true;

let unit: number; // Declare variable without assigning a value
unit = 5;


let firstname: string = 'danny';


let age: number | string;
age = 26;
age = '26';

let nullableAge: string | null;
age = 26;
age = '26';

let multipleTypes: string | number | boolean;
multipleTypes = 'name';
multipleTypes = 44;
multipleTypes = true;

//Arrays

let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ['Danny', 'Anna', 'Bazza'];
let options: boolean[] = [true, false, false];

//Interfaces

interface User {
    name: string;
    age: number;
    isProgrammer: boolean;
}

let person1: User = {
    name: 'Jan',
    age: 25,
    isProgrammer: true,
};

//Types
type StringOrNumber = string | number;

type PersonObject = {
  name: string;
  id: StringOrNumber;
};

//Functions

// function calculateAge(age: number, increment: number): number {
//     return age + increment;
//   }

const calculateAge = (age: number, increment: number): number => {
    return age + increment;
}

//Classes 
class Person {
    name: string;
    isCool: boolean;
    pets: number;
  
    constructor(n: string, c: boolean, p: number) {
      this.name = n;
      this.isCool = c;
      this.pets = p;
    }
}
const person = new Person('Danny', false, 1);



interface IPerson {
  firstName: string;
  lastName: string;
}

class PersonClass implements IPerson {
  firstName: string;
  lastName: string;
}

type TPerson {
  firstName: string;
  lastName: string;
}
function getFullName1(person: TPerson) {
  return person.firstName + ' ' + person.lastName;
}


function getFullName2(person: {firstName: string, lastName: string}) {
  return person.firstName + ' ' + person.lastName;
}



