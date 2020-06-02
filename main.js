//Inicializo la librería Muuri como grid//

const grid = new Muuri('.grid', {
    layout: {
        rounding: false
    }
});



//Obtengo los elementos html por el id//

const audio = document.getElementById('audio');
const recordar = document.getElementById('recordar');
const play = document.getElementById('play');
const audiorecordar = document.getElementById('audiorecordar');

//Configuro el audio "Para recordar"//
recordar.addEventListener('click', () => {
    audiorecordar.paused ? audiorecordar.play(): audiorecordar.pause();
});

//Configuro el audio principal para que el resto del documento se muestre después de reproducirlo//
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

