import { LightningElement } from "lwc";

export default class App extends LightningElement {

//armazenando informações dentro de um objeto
  pessoa  ={ 
    name:"Bruninha",
    tel:'13 99465-6554',
    idade: 28,
    status: true
  };

//fazendo uma lista
  pokemon = [
    {cod: 1, nome: "Pikachu", tipo:"Raio", nivel:45, cor:"amarelo"},
    {cod: 2, nome: "Bru", tipo:"Princess", nivel:50, cor:"Rosa"},
    {cod: 3, nome: "Arnald", tipo:"Hero", nivel:70, cor:"Gold"},
    {cod: 4, nome: "GU", tipo:"Prince", nivel:70, cor:"Diamond"},
    {cod: 5, nome: "Ro", tipo:"Thinker", nivel:80, cor:"Silver"},
    {cod: 6, nome: "Day", tipo:"Queen", nivel:90, cor:"black diamond"},

  ];


}
