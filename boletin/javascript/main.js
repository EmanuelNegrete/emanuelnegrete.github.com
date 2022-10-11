
// DOM
/*let links = document.querySelectorAll("a");

links.forEach(function(links){
    console.log(links);
});

let celdas = document.querySelectorAll("td");


celdas.forEach(function(td){
    td.addEventListener('click',function(){
        console.log(this);
    })
});*/

// OBTENER LOS ELEMENTOS DE LA CLASE .CLOSE

let links = document.querySelectorAll(".close");

//RECORRERLOS


links.forEach(function(links){
    //AGREGAR EVENTO CLICK A CADA UNO DE ELLOS
    links.addEventListener('click',function(ev){
        ev.preventDefault();

        let content = document.querySelector('.content');
        //QUITARLE CLASES DE ANIMACION DE ENTRADA
        content.classList.remove('animate__fadeInRight');
        content.classList.remove('animate__animated');
        //PONERLE CLASES DE ANIMACION DE SALIDA
        content.classList.add("animate__animated");
        content.classList.add("animate__fadeOutUp");

        setTimeout(function(){
            location.href="/";
        },1000);
        

        return false;
    });
});

/*let iconos = document.querySelectorAll("i");

iconos.forEach(function(icono){
    icono.classList.remove("fa-star")
    icono.classList.add("fa-star-o")
});*/