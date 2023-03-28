const menu = [
    {
      name: 'Home',
      link: '/',
      items: []
    },
    {
      name: 'About',
      link: '/about',
      items: []
    },
    {
      name: 'Products',
      link: '/products',
      items: [
        {
          name: 'Product 1',
          link: '/products/1',
          items: []
        },
        {
          name: 'Product 2',
          link: '/products/2',
          items: [
            {
              name: 'Product 2.1',
              link: '/products/2/1',
              items: []
            },
          ]
        },
      ]
    },
    {
      name: 'Services',
      link: '/services',
      items: [
        {
          name: 'Service 1',
          link: '/services/1',
          items: [
            {
              name: 'Service 1.1',
              link: '/services/1/1',
              items: []
            },
          ]
        },
        {
          name: 'Service 2',
          link: '/services/2',
          items: [
            {
              name: 'Service 2.1',
              link: '/services/2/1',
              items: []
            },
            {
              name: 'Service 2.2',
              link: '/services/2/2',
              items: []
            },
          ]
        },
      ]
    },
]
function crearMenu(valores, actual, visible) {
    let divUl=document.createElement("ul");
    actual.appendChild(divUl);//Agrego contenedor de la lista
    divUl.style.display=visible;
    //Agrego elementos de la lista en el contenedor actual
    for (let i=0;i<valores.length;i++) {
        let itemActual=document.createElement("li");
        itemActual.setAttribute("class","list-group-item");
        valores[i].name;
        //Quito el a href para que no se me abra nada ya que no tengo links reales y visualizar el camcio de estilo
        //let enlace='<a href="'+valores[i].link+'">'+valores[i].name+'</a>';
        let enlace =valores[i].name;
        if (valores[i].items.length>0) {
            enlace+='<button type="button" class="btn btn-light">>></button>';
        }
        itemActual.innerHTML=enlace;//Le agrego el texto al item
        divUl.appendChild(itemActual);//Lo inserto
        if (valores[i].items.length>0) {//Si contiene otro elemento, vuelvo a llamar la función para que cree otro
            crearMenu(valores[i].items,itemActual,'none');
        }
    }
}

crearMenu(menu,document.getElementById("first"),'block');

let item = document.querySelectorAll("button");
item.forEach(function(event) {
    event.addEventListener("click", function(e) {
        elemento=e.target;
        parent=elemento.parentNode;
        parent.className+=" active";
        if (elemento.nextSibling.style.display==='block') {
            elemento.innerHTML=">>"
            elemento.nextSibling.style.display='none';
        }
        else if (elemento.nextSibling.style.display='none') {
            elemento.innerHTML="<<"
            elemento.nextSibling.style.display='block';
        }
    });
});
let act = document.querySelectorAll("li");
act.forEach(function(event) {
    //console.log(event);
    event.addEventListener("click", function(e) {
        elemento=e.target;
        if (elemento.tagName==="LI") {
            elemento.className+=" active";
            for (let i=0; i<act.length;i++) {//Desactivo
                if (!(act[i]===elemento)){
                    let f=act[i];
                    f.className="list-group-item";
                }
            }
        }
        if (elemento.tagName==="BUTTON") {
            for (let i=0; i<act.length;i++) {//Desactivo todos menos el padre
                if (!(act[i]===elemento.parentNode)){
                    let f=act[i];
                    f.className="list-group-item";
                }
            }
        }
    });
});
