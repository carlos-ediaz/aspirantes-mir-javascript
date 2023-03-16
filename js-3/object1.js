const pedro = {
    nombre :"Pedro Perez",
    edad:30,
    activo:true,
    hobbies :["programar", "squash", "piano"]
}
//imprimir edad: 
console.log(pedro.edad);
//Agrega una propiedad con llave estatura y valor 1.8
pedro.estatura=1.8;
//Elimina la propiedad con llave activo.
delete(pedro.activo);
//Recorre todas las propiedades e imprímelas en consola 
//(una línea por propiedad y separando la llave y el valor con dos puntos :).
console.log("---------------");
llaves=Object.keys(pedro);
valores=[];
for (let j=0;j<llaves.length;j++) {
    valores.splice(0,0,pedro[llaves[j]]);
    console.log(llaves[j]+": "+pedro[llaves[j]])
}
//Agrégale al objeto una función llamada saluda que 
//retorne la frase “Hola, me llamo ” seguido del nombre de la persona.
function saluda(nombre) {
    return "Hola, me llamo "+nombre;
}
pedro.saluda=saluda(pedro.nombre);
//llama la función saluda
console.log(pedro.saluda);

