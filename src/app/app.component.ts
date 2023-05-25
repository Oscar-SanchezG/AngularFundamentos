import { Component } from '@angular/core';
import { People } from './people.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  widthImg = 10;
  color: string[] = [
    'verde',
    'azul',
    'rojo'
  ];
  name = 'bambosan';
  age = 27;
  img = 'https://static.vecteezy.com/system/resources/previews/002/275/847/non_2x/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg';
  btnDisable = true;
  person = {
    name: 'Oscar',
    age: 27,
    avatar: "https://static.vecteezy.com/system/resources/previews/002/275/847/non_2x/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg"
  }
  register = {
    name: '',
    email: '',
    password: '',
  }

  names: string[] = ['bambosan', 'pedro', 'arturo'];
  newName = '';
  box = {
    width: 100,
    height: 100,
    background: 'red'
  };

  peopleArray: People[] = [
    {
        firstname: 'Freddy',
        lastname: 'Vega',
        age: 35,
        image: './assets/img/foto1.png'
    },
    {
        firstname: 'Nicolas',
        lastname: 'Molina',
        age: 29,
        image: './assets/img/foto2.png',
        sexo: 'masculino'
    },
    {
        firstname: 'Ángela',
        lastname: 'Ocando',
        age: 30,
        image: './assets/img/foto3.png'
    }
  ];

  toggleButton(){
    this.btnDisable = !this.btnDisable;
  }
  addAge(){
    this.person.age += 1;
  }

  onSroll(event: Event){
    const element = event.target as HTMLDivElement;
    console.log(element.scrollTop);
  }

  changeName(event: Event){
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;

  }

  addName(){
    this.names.push(this.newName);
    this.newName = "";
  }

  deleteName(index: number){
    this.names.splice(index, 1);
  }
  onRegister() {
    console.log(this.register);
  }
}
