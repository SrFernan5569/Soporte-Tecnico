///////////////// Menú Hamburguesa (variables) /////////////////
let enlaces = document.getElementById("nav-linksID");
let hamburguesa = document.getElementById("hamburguer-ID");


//////////////////Baner Carrousel (Variables)///////////////////
let contGrande = document.getElementById("grande-container");
let puntos = document.getElementsByClassName("punto");



////////////////Menú Hamburguesa (lógica)///////////////////

hamburguesa.addEventListener('click',() =>{
    enlaces.classList.toggle("show")
})

//////////////////Baner Carrousel (Lógica)///////////////////

// Cuando haga CLICK en punto:
// -obtener la posición ese punto
// -Hacer transform: translateX(0 o -50%);
// -quitar a todos los puntos la clase ACTIVO
// -darle la clase ACTIVO al punto al que le hemos hecho click


for(let i = 0; i < puntos.length; i++){
    puntos[i].addEventListener("click",()=>{
        let posicionPunto = i;
        let posicionContenedor;

        if(posicionPunto == 0){
            posicionContenedor = 0
        }
        else{
            posicionContenedor = -50
        }

        contGrande.style.transform = `translateX(${posicionContenedor}%)`

        for(let j=0; j< puntos.length; j++){
            puntos[j].classList.remove("punto-activo")
        }

        puntos[i].classList.add("punto-activo")

    })
}
