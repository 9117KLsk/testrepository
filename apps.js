const set = new Set([11,2,3,3,4,5,true,false,true,'Hola','HOla']);
console.log(set);
console.log(set.size);  // en Set se usa size en lugar de length

const set2 = new Set();
set2.add(1);
set2.add(2);
set2.add(2);
set2.add(3);
set2.add(true);
set2.add(false);
set2.add(true);
set2.add({});
 
console.log(set2);
console.log(set2.size);

console.log('Recorriendo set');

for (item of set) {
    console.log(item);
}

console.log('Recorriendo set2');

set2.forEach(item=>console.log(item));
console.log({});

let arr = Array.from(set);  // convierte en arreglo el objeto Set
console.log(arr);
console.log(arr[0]);
console.log(arr[8]);

set.delete('HOla');
console.log(set);
console.log(set.has('hola'));
console.log(set.has(19));

set2.clear();
console.log(set2)