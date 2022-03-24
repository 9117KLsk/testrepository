const persona = {
    nombre:"",
    apellido:"",
    edad: 0
}

const manejador = {
    set(obj, prop, valor) {
     if(Object.keys(obj).indexOf(prop)===-1) {
        return console.error(`la propiedad '${prop}' no existe en el objeto persona`);
     }    
    
    if(

      (prop === "nombre" || prop === "apellido") && !(/^[A-Za-zÑñÁáÉeÍíÓóÚúÜü\s]+$/g.test(valor))
    ){
      return console.error(`La propiedad "${prop}" solo acepta letras, espacios en blanco`);
     }
        obj[prop]=valor;
     }
       
    }

    const marcelo = new Proxy(persona, manejador);
    marcelo.nombre = "Marcelo2007";
    marcelo.apellido = "Domí-nguez";
    marcelo.edad = 53;
    marcelo.facebook = "marcelodob@yahoo.com"

    console.log(marcelo);
    console.log(persona);