console.log(this);

this.lugar = 'Contexto Global';

function saludar(saludo,aQuien){
    console.log(`${saludo} ${aQuien}, desde el ${this.lugar}`)
}

saludar('Hola', 'Siux');

const obj={
    lugar:"Contexto Objeto"
}

saludar.call(obj, "Qué Onda", "Marcelo");
saludar.apply(null, ["Q'íuboles", " Domínguez"]);
saludar.apply(obj, ['Hasta Pronto', ' Cocodrilo']);
saludar.apply(null, ['Hasta Pronto', ' Cocodrilo']);
saludar.apply(this, ['Hasta Pronto', ' Cocodrilo']);

const persona = {
    nombre: 'Marcelo',
    saludar: function() {
        console.log(`Hola ${this.nombre}`);
    }

}

persona.saludar();

const otraPersona = {
    saludar:persona.saludar.bind(persona)
}

otraPersona.saludar();