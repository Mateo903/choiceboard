const grid = new Muuri('.grid', {
    layout: {
        rounding: false
    }
});


//Para que las imagenes se muestren después de que cargue//


const audio = document.getElementById('audio');
const recordar = document.getElementById('recordar');
const play = document.getElementById('play');
const audiorecordar = document.getElementById('audiorecordar');

recordar.addEventListener('click', () => {
    audiorecordar.paused ? audiorecordar.play(): audiorecordar.pause();
});

play.addEventListener('click', (e) => { 
    if (!audio.paused){ 
        audio.pause();
    }else{
        audio.play()
        grid.refreshItems().layout();
        document.getElementById('grid').classList.add('imagenes-cargadas');
        play.classList.add('true');
    }

});




// window.addEventListener('load', () => {
//     grid.refreshItems().layout();
//     document.getElementById('grid').classList.add('imagenes-cargadas');

    

    
    

//     //Filtrado por categoria//
//     const enlaces = document.querySelectorAll('#categorias a');
//     enlaces.forEach((elemento) => {
//         elemento.addEventListener('click', (evento) => {
//             evento.preventDefault();
//             enlaces.forEach((enlace) => enlace.classList.remove('activo'));
//             evento.target.classList.add('activo');

//             const categoria = evento.target.innerHTML.toLowerCase();
//             categoria !=='todos' ? grid.filter(`[data-categoria="${categoria}"]`) : grid.filter('[data-categoria]');
//         });
//     });

//     //Barra de busqueda//
//     document.querySelector('#barra-busqueda').addEventListener('input', (evento) => {
//         const busqueda = evento.target.value;
//         grid.filter( (item) => item.getElement().dataset.etiqueta.includes(busqueda.toLowerCase()) );
//     });


//     //Acceder informacion de los proyectos para el overlay//
//     const overlay = document.getElementById('overlay');
//     document.querySelectorAll('.grid .item img').forEach((elemento) => {
        
//         elemento.addEventListener('click', () => {
//             const ruta = elemento.getAttribute('src');
//             const descripcion = elemento.parentNode.parentNode.dataset.descripcion;
//             overlay.classList.add('activo');
//             document.querySelector('#overlay img').src = ruta;
//             document.querySelector('#overlay .pie-overlay').innerHTML = descripcion;
//         });
//     });

//     //Cerrar overlay//

//     //Boton//
//     document.querySelector('#btn-overlay').addEventListener('click', () => {
//         overlay.classList.remove('activo');
//     });

//     //Tecla Esc//
//     document.addEventListener('keydown', (e) => {
//         e.key === 'Escape' ? overlay.classList.remove('activo'):"";
//     });

//     //Clickeando afuera//
//     overlay.addEventListener('click', (e) => {
//         e.target.id === 'overlay' ? overlay.classList.remove('activo'): "";
//     });

// });

