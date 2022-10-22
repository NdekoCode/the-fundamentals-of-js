let a = null;
let c = a || 5;
/**
  Le code ci-haut est equivalent à
let c;
if (a) { // Si la valeur de a est verifier
  c = a;
} else {
  c = 5;
}
*/

let b = 5;
let d = a && b;
/* 
Le code ci-haut est équivalent à
if(a) { // Si "a" vaut vraie alors "b" sera executer
    d = b;
} */

let e = "salut";
let f = a ?? e;
/* 
ESt equivalent au code ci-haut
if(a===undefined || a===null) {
    f = e;
} */

let maVar;
maVar ??= 3;
/* 
Est equivalent au code au dessus
if (maVar === undefined || maVar === null) {
  a = 3;
}
 */

let myChar;
myChar ||= 5;
/* 
Est equivalent au code qui est ci-haut
if (!myChar) {
  myChar = 5;
} */
