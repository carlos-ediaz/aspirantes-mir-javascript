//Ejercicio 2:
/*
En un archivo llamado object2.js Crea un objeto literal llamado "persona" con las siguientes propiedades: 
nombre, edad, ciudad y profesión.
*/
persona = {
    nombre:"Carlos",
    edad:"25",
    ciudad:"Bogota",
    profesion:"Profesor"
}
//Imprime en la consola el objeto "persona" completo.
console.log(persona);
/*Crea una función llamada "presentacion" que tome el objeto 
"persona" como argumento y devuelva una cadena de texto 
que incluya el nombre, la edad y la ciudad de la persona.*/
function presentacion (person) {
    llaves=Object.keys(person);
    valores=[];
    let texto="";
    for (let j=0;j<llaves.length-1;j++) {//Solo omito la última propiedad
        valores.splice(0,0,person[llaves[j]]);
        texto+=(llaves[j]+": "+person[llaves[j]]+"\n")
    }
    return texto;
}
/*Llama a la función "presentacion" y almacena el resultado en una variable llamada "mensaje".*/
let mensaje=presentacion(persona);
/*Imprime en la consola el valor de la variable "mensaje".*/
console.log(mensaje);
/*Agrega una nueva propiedad al objeto "persona" llamada "hobbies" que sea un arreglo con algunos pasatiempos.*/
persona.hobbies=["futbol","baile","netflix"];
/*Imprime en la consola la propiedad "hobbies" del 
objeto "persona".*/
console.log(persona.hobbies)
/*Utiliza un ciclo for para imprimir en la consola cada uno de los elementos del arreglo de hobbies.*/
for (let i=0;i<persona.hobbies.length;i++) {
    console.log(persona.hobbies[i]+"\n")
}
