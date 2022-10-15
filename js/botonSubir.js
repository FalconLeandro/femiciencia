/*INICIO logica boton subir en news */

let subir = document.querySelector('.boton-news-div');

function mostrarScroll() {
    let scrollTop = document.documentElement.scrollTop
    let alturaFlecha = subir.offsetTop;
    if (alturaFlecha + 200 < scrollTop) {
        subir.style.display = 'block';
        subir.style.position = 'fixed';
    }
}

window.addEventListener('scroll', mostrarScroll);

/*FIN logica boton subir en news */