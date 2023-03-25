const dform = document.getElementById("dform");
const lista_add =[];
let ind=0;
let btn_delete=document.getElementById('btn-delete');
let div_list=document.getElementById('div-list');
let filterDone=document.getElementById('filterDone');
let filterPending=document.getElementById('filterPending');
let filterAll=document.getElementById('filterAll');
let section = 'all';

function countDone () {
    let done=0;
    for (let i=0;i<lista_add.length;i++) {
        if (lista_add[i].completed===true) {
            done++;
        }
    }
    return done;
}
function countPending () {
    let pending=0;
    for (let i=0;i<lista_add.length;i++) {
        if (lista_add[i].completed===false) {
            pending++;
        }
    }
    return pending;
}
function checkVisibility () {
    if (section==='done') {
        for (let i=0;i<lista_add.length;i++) {
            if (lista_add[i].completed===true) {
                let divPen = document.getElementById("div"+lista_add[i].id);
                divPen.style.display = 'flex';//Muestro los completados
            }
            if (lista_add[i].completed===false) {
                let divPen = document.getElementById("div"+lista_add[i].id);
                divPen.style.display = 'none';//No muestro los completados
            }
        }
        console.log(countDone());
        if (countDone()===0) {
            console.log("Sin elementos");
            btn_delete.style.display = 'none';//Si ya no tengo elementos en realizadas, oculto el botón
        }
        else {
            btn_delete.style.display = 'block'
        }
    }
    else if (section=='pending') {
        for (let i=0;i<lista_add.length;i++) {
            if (lista_add[i].completed===true) {
                let divPen = document.getElementById("div"+lista_add[i].id);
                divPen.style.display = 'none';//No muestro los completados
            }
            if (lista_add[i].completed===false) {
                let divPen = document.getElementById("div"+lista_add[i].id);
                divPen.style.display = 'flex';
            }
        }
        btn_delete.style.display = 'none';//Solo salen los pendientes, evito borrar desde esta vista las que puedan estar completadas
        
    }
    else if (section=='all') {
        for (let i=0;i<lista_add.length;i++) {
            let divPen = document.getElementById("div"+lista_add[i].id);
            divPen.style.display = 'flex';//Muestro todos los elementos
        }
        if (countDone()===0) {
            btn_delete.style.display = 'none';//Si todas están pendientes, no muestro el botón de borrar
        }
        else {
            btn_delete.style.display = 'block';//Lo muestro si hay algo para borrar
        }
    }
    document.getElementById("badgePending").innerHTML=countPending();
    document.getElementById("badgeDone").innerHTML=countDone();
    document.getElementById("badgeAll").innerHTML=(countDone()+countPending());

}
filterDone.addEventListener('click', function() {
    console.log("btn_comp");
    section = 'done';
    checkVisibility();
});
filterPending.addEventListener('click', function() {
    console.log("btn_no_comp");
    section ='pending';
    checkVisibility();
    
});
filterAll.addEventListener('click', function() {
    console.log("btn_all");
    section ='all';
    checkVisibility();
});


btn_delete.addEventListener('click', function (event) {
    for (let i=0; i<lista_add.length;i++) {
        console.log("i:"+i+"\n");
        if (lista_add[i].completed===true) {//Si completed es true, borro el div
            let divDel = document.getElementById("div"+lista_add[i].id);//Agarro el div que voy a borrar
            divDel.parentNode.removeChild(divDel);//Lo borro
            lista_add.splice(i,1);//Borro el elemento del array
            console.log("Borré elemento pos "+i);
            i=-1;//Reinicio i para que al borrar, no queden elementos sin revisar, -1  porque i++ lo pone en 0
        }
    }
    if (lista_add.length===0) {
        div_list.style.display = 'none';//Si la lista está vacía, oculto contenido
    }
});
dform.addEventListener('submit', function(event) {//Eventos al enviar un dato
    //--------Creo y agrego los elementos de la lista---------------
    let divtareas = document.getElementById("lista");//Div contenedor de la lista de tareas
    let tarea = document.createElement("div");//div para tareas individuales
    tarea.id = "div"+ind;//Los id de los divs para eliminar el elemento completamente
    tarea.setAttribute('class', 'input-group mb-1');//mb1 es espacio entre tareas
    let divcheckbox0 = document.createElement("div");
    divcheckbox0.setAttribute('class',"input-group-text");
    let divcheckbox1 = document.createElement("div");
    divcheckbox1.setAttribute('class',"input-group-prepend");
    let check_tarea = document.createElement('input');//Checkbox
    check_tarea.setAttribute('type', 'checkbox');//Agrego estos atributos al checkbox
    check_tarea.id = ind;//Para poder asignar el label for
    check_tarea.setAttribute('class', 'check form-check-input');
    let lab_tarea=document.createElement('label');//Creo el label para el texto
    lab_tarea.setAttribute('for', ind);//Debe ser igual que el id
    lab_tarea.id="lab"+ind;//Le agrego id al label para poder llamarlo en js y agregarle el tachado
    lab_tarea.setAttribute('class', 'form-control lab-task');
    let texto_t=document.getElementById("tarea_in").value;
    lab_tarea.innerHTML=texto_t;//Escribo en el label lo que hay en el input
    
    if (texto_t.split(" ").join("").length===0) {
        alert("El campo no puede estar vacío")
    }
    else {        
        //------------------Agrego el div con el item-----------------
        divtareas.insertBefore(tarea, divtareas.firstChild);//Para que el más reciente me quede primero
        tarea.appendChild(divcheckbox0);
        divcheckbox0.appendChild(divcheckbox1);
        divcheckbox1.appendChild(check_tarea);//Agrego el checknox
        tarea.appendChild(lab_tarea);//Agrego el texto
        checkVisibility();//Para que se actualice la vista
        //-------------------Agrego los elementos al vector-------------------------
        lista_add.push({//Agrego al array 
            id: ind,//Para que los id sean únicos y no se repitan cuando yo elimine
            title: texto_t,
            completed: false
        });
        ind++;//Para cambiar el id 
        
    }
    document.getElementById("tarea_in").value="";//Borro el input para escribir de nuevo
    //-----------------Mostrar contenido-------------------------
    if (lista_add.length>0) {//Si la lista no está vacía, muestro el botón de borrar y contenido
        div_list.style.display = 'block';
    }
    //-----------------------------Comportamiento del check y tachado del texto-------------------------------
    let item = document.querySelector("input.check");
    item.addEventListener("click", function() {
        //console.log(item.id);
        let idActual=item.id;//El atributo id del checkbox es el id de la tarea
        let valorActual={};
        let pos=-1;//Para guardar la posición de la coincidencia
        for (let i=0;i<lista_add.length;i++) {
            if (lista_add[i].id===parseInt(idActual)) {//Busco el elemento del la lista que contiene el id del checkbox
                valorActual=lista_add[i];//Para saber cual elemento seleccioné
                pos=i;//Guardo la coincidencia
            }
        }
        let textoItem = document.getElementById("lab"+item.id);//Agarro el label para tacharlo o destacharlo con el if
        //console.log(textoItem);
        if (item.checked) {//Cuando selecciono una tarea:
            lista_add[pos].completed=true;//Le cambio el estado al seleccionarlo
            //console.log(lista_add[pos]);
            textoItem.classList.add("is-completed");
        } else {
            lista_add[pos].completed=false;//Le cambio el estado al seleccionarlo
            //console.log(lista_add[pos]);
            textoItem.classList.remove("is-completed");
        }
        checkVisibility();//Para que se actualice la vista si hago cambios en el estado de las tareas
    });

    event.preventDefault();
});

