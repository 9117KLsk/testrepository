//Una cadena es iterable
//const iterable1 = "Hola Mundo";
/* const  iterable1 = new Map([['Nombre','Jon'], ['Edad', 35]]);
const iterador1 = iterable1[Symbol.iterator]();
console.log(iterable1);
console.log(iterador1);

console.log(iterador1.next());
console.log(iterador1.next());
console.log(iterador1.next());
console.log(iterador1.next());
console.log(iterador1.next());
console.log(iterador1.next());
console.log(iterador1.next());
console.log(iterador1.next());
console.log(iterador1.next());
console.log(iterador1.next());


let next = iterador1.next();

while (!next.done) {
    console.log(next.value);
    next = iterador1.next();
}  




Un arreglo es iterable
const iterable2 = [1,2,3,4,5];
const iterable2 = [1,2,3,4,5]
Accedemos al iterador del iterable */
const iterable2 = new Set([1,1,2,2,2,2,3,4,5,5,5]);
const iterador2 = iterable2[Symbol.iterator]();

console.log(iterable2);
console.log(iterador2);

/*console.log(iterador2.next());
console.log(iterador2.next());
console.log(iterador2.next());
console.log(iterador2.next());
console.log(iterador2.next());
*/

let next2 = iterador2.next();

while (!next2.done) {
    console.log(next2.value);
    next2 = iterador2.next();
} 