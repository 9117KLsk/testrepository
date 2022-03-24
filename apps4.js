function* iterable() {
    yield 'Hola';
    console.log('Hola Consola');
    yield 'Hola2';
    console.log('Seguimos con más instrucciones de nuestro código');
    yield 'Hola3';
    yield 'Hola4';
}

let iterador = iterable();

/*console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());*/

 for(let y of iterador) {
     console.log(y);
}

const arr = [...iterable()];
    console.log(arr);

function cuadrado(valor){
    setTimeout(()=>{
       return console.log({valor, resultado:valor*valor});
    },Math.random()*1000);

}

function* generador() {
    console.log('Inicia Generator');
    yield cuadrado(0);
    yield cuadrado(1);
    yield cuadrado(2);
    yield cuadrado(3);
    yield cuadrado(4);
    yield cuadrado(5);
    console.log('Termina Generator');
}

let gen = generador();
for(let y of gen) {
    console.log(y);
} 