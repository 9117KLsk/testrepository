let aleatorio = Math.round(Math.random()*100+5);

const objUsuarios = {
   propiedad: 'Valor',
   [`id_${aleatorio}`]:"Valor aleatorio"
}
console.log(objUsuarios); 
const usuarios = ['Victor Hugo','Mayra','Michi','Evelin','Juanita','Edilia','Oscar','Flor','Mikecraft','Leonor','Toñita','Tonahtiu','Tonantzin'];
// la instrucción "=>" debe estar contigua y no separada para que imprima en consola {id_1, id_2,... etc.} 
usuarios.forEach((usuario,index)=>objUsuarios[`id_${index}`]=usuario); 
console.log(objUsuarios);
