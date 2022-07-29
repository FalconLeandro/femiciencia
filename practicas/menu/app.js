/*Logica para crear la cruz del menu burguer*/
const burguer = document.querySelector(".menu-btn");
const linea1 = document.querySelector(".linea1");
const linea2 = document.querySelector(".linea2");
const linea3 = document.querySelector(".linea3");

burguer.addEventListener("click", lineaAnimada);

function lineaAnimada(){
    linea1.classList.toggle("linea1active");
    linea2.classList.toggle("linea2active");
    linea3.classList.toggle("linea3active");
}
/*FIN Logica para crear la cruz del menu burguer*/

/*Logica para activar y desactivar el menu burguer*/
let btn=document.querySelector('#burguer');
console.log(btn.checked);
btn.addEventListener('click',()=>console.log(btn.checked))
const nav=document.querySelector('nav');
const navUl=document.querySelector('nav ul');
let links = document.querySelectorAll("nav a");

/*logs para ver si agarre todos los nodos correctamente*/
// console.log(nav); 
// console.log(links);
// links.forEach(a=>console.log(a)); //chequeo que me tome cada a del nav
/*FIN logs para ver si agarre todos los nodos correctamente*/

/* function doit() {
    if(btn = true){
        nav.style.display = "block";

    }else{
        navUl.style.display= "none";
    };
*/

// links.forEach(cbox =>{cbox.addEventListener("click", doit);})
/*FIN Logica para activar y desactivar el menu burguer*/

// cuando btn = true quiero que el nav block
//cuando btn = false quiero que el nav sea invisible

// cuando haya un click en un a el btn sea false
btn.addEventListener('click', () =>{
    if (btn.checked==true) {
        
    document.body.style.backgroundColor=  "black";
    //nav.style.backgroundColor=  "black";
    nav.style.position=  "absolute";
    nav.style.top=  "10%";

    navUl.style.display=  "flex";
    navUl.style.flexDirection=  "column";
    nav.style.display=  "block";
    } 
})



        
    
    
        
    
    


// function cerrarMenu(){
//     if (btn.checked = false || anchorCliqueado){
//         nav.style.display=  "none";
//     } else{
        
//     }
// } 









