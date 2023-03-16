//Ejercicio 2:
/*
En un archivo llamado object2.js Crea un objeto literal 
llamado "persona" con las siguientes propiedades: 
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
/*Llama a la función "presentacion" y almacena el resultado 
en una variable llamada "mensaje".*/
let mensaje=presentacion(persona);
/*Imprime en la consola el valor de la variable "mensaje".*/
console.log(mensaje);
/*Agrega una nueva propiedad al objeto "persona" llamada 
"hobbies" que sea un arreglo con algunos pasatiempos.*/
persona.hobbies=["futbol","baile","netflix"];
/*Imprime en la consola la propiedad "hobbies" del 
objeto "persona".*/
console.log(persona.hobbies)
/*Utiliza un ciclo for para imprimir en la consola cada 
uno de los elementos del arreglo de hobbies.*/
for (let i=0;i<persona.hobbies.length;i++) {
    console.log(persona.hobbies[i]+"\n")
}
/*
Ejercicio 3:
En un archivo llamado object3.js Crear una variable llamada receta e inicialízalo con un objeto literal vacío.
Agrégale una propiedad nombre con valor “Sandwich”.
Agrégale una propiedad ingredientes con un arreglo vacío.
Agrega un objeto al arreglo ingredientes con las siguientes propiedades:
nombre: “Pan”
cantidad: 2
Agrega otro ingrediente al arreglo con las siguientes propiedades:
nombre: “Queso”
cantidad: 1
Debajo del objeto imprime en la consola el nombre del primer ingrediente, debería aparecer "Pan".
Suma todos las cantidades de los ingredientes y muestra el resultado en consola.
Poscondiciones:

Crea un commit con el mensaje “solucion a los ejercicios de js”.
Integra la rama develop a la rama principal.
Hazle push al repositorio remoto.
Elimina la rama develop del repositorio local.
Compartir el link del repositorio en esta misión.
*/
