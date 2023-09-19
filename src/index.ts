// import * as _ from "lodash";
import { mytest } from './prova';
import './styles.css';
import { Person } from './person';
import { Root } from  './randomUsers';


const request = fetch('https://randomuser.me/api/');
const response = request.then(response => {
    const json = response.json();
    console.log(json);
    return json;
});


function draw(){
    const element = document.createElement('div');
    const text2 = mytest();
   // element.innerHTML = 'Hello World';
  //  const text = _.join(['Ciaoooo', 'mondo', text2], ' ');
    element.innerHTML = text2; 
    element.classList.add('hello');  
    showPeople();         
    return element;
}

function getPeople(): Person[] {
    return [{ name: 'John', age: 25 }, { name: 'Jane', age: 27 }, {name: 'Jack', age: 33}];
}

function showPeople() : void {
   const people = getPeople();
   people.forEach( person => {
      console.log(person.name + ' ' + person.age);
   });
}


document.body.appendChild(draw());