// 1-import & export
import { Name, pren } from "./utils.js";
import * as info from "./utils.js"
import prenom from "./utils.js"
console.log(Name);
console.log(pren);
console.log(info.Name);
console.log(info.pren);
console.log(prenom);
// 2-Revisiting Variables & Values
let nom = "amine";
nom = "amine mebarki";
console.log(nom);
const adress = "ALGER";
// a constant does not change, it is just read
console.log(adress);
// 3-Revisiting Functions & Parameters
function showName() {
    console.log("Amine MEBARKI");
}
showName();

function showName(Name) {
    console.log(Name);
}
showName("Amine MEBARKI");

function showName(nom, Prenom) {
    console.log(nom + Prenom);
}
showName("Amine", " MEBARKI");

function showName(nom, Prenom = "MEBARKI") {
    console.log(nom + Prenom);
}
showName("Amine");

function showName(nom, Prenom = "MEBARKI") {
    console.log(nom + Prenom);
}
showName("Amine", " IKRABEM");
// 4-Arrow Functions

const arrowfunc = (nom) => {
    return "mon nom est" + nom;
}
console.log(arrowfunc("amine"));
// 5-Revisiting Objects & Classes
const user = {
    nom: "Mebarki",
    prenom: "Amine",
    Age: 28,
    Affiche() {
        console.log("Je me prénome " + this.nom + " " + this.prenom + " et j'ai " + this.Age);
    }
}
user.Affiche();

class User2 {
    constructor(nom, prenom) {
        this.nom = nom;
        this.prenom = prenom;
    }
    affiche() {
        console.log(this.nom + " " + this.prenom);
    }
}
let x1 = new User2("Ahmed", "chorfi");
x1.affiche();
let x2 = new User2("said", "khatir");
x2.affiche();
// 6-Arrays & Array Methods like map()
let tab = ["amine", "ahmed", "hamid"];
tab.map((x) => { console.log(x); })
let tab2 = [{
    nom: "amine",
    prenom: "mebarki",
    age: 28
}, {
    nom: "ahmed",
    prenom: "saidi",
    age: 25
}, {
    nom: "hamid",
    prenom: "dehimi",
    age: 30
}];
tab2.push({
    nom: "lakhdar",
    prenom: "swidi",
    age: "26"
});
tab2.map((x) => { console.log("je m'appel " + x.nom + " " + x.prenom + " et j'ai " + x.age) });

// 6- Destructuring
const [nom, prenom] = ["mebarki", "amine"];
console.log(nom, prenom);
const { sexe: HF, age } = {
    sexe: "homme",
    age: "25"
};
console.log(HF, age);

// 7-The Spread Operator
const x = ["mebarki", "amine"];
const y = [...x, "mohamed"];
console.log(y);
const x2 = {
  nom: "amine",
  mebarki: "mebarki"
};
const y2 = {
  ...x2,
  nom: "mohamed"
};
console.log(y2);
