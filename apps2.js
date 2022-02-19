let mapa = new Map();
mapa.set('nombre','jon');
mapa.set('apellido','mircha');
mapa.set('Edad', 35);

console.log(mapa);
console.log(mapa.size);

console.log(mapa.has('correo'));
console.log(mapa.has('nombre'));
console.log(mapa.get('nombre'));
mapa.set('nombre','Jonathan Mircha');
console.log(mapa.get('nombre'));
mapa.delete('apellido');
console.log(mapa);

mapa.set(19,'diecinueve');
mapa.set(false, 'Falso');
mapa.set({},{});
console.log(mapa);
/* El mapa como estructura iterable */
for (let [key,value] of mapa){
    console.log(`llave: ${key},  Valor: ${value}`);
}
/* elaboración de un mapa. Observe que a diferencia
 de un objeto, la llave puede ser cualquier tipo de 
 dato no solo una cadena */
const mapa2 = new Map([
['nombre', 'Vikingo'],
['edad', 7],
['animal','perro'],
[null, 'nulo']
]);

console.log(mapa2);

// Destructuración de un mapa
const llavesMapa2 = [...mapa2.keys()];
const valoresMapa2 = [...mapa2.values()];

console.log(llavesMapa2);
console.log(valoresMapa2);