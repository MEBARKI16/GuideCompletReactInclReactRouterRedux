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
function showName(){
    console.log("Amine MEBARKI");
}
showName();

function showName(Name){
    console.log(Name);
}
showName("Amine MEBARKI");

function showName(nom , Prenom){
    console.log(nom + Prenom);
}
showName("Amine"," MEBARKI");

function showName(nom , Prenom = "MEBARKI"){
    console.log(nom + Prenom);
}
showName("Amine");

function showName(nom , Prenom = "MEBARKI"){
    console.log(nom + Prenom);
}
showName("Amine"," IKRABEM");