function tocaSom (idDoAudio) {

    document.querySelector(idDoAudio).play();

}

const tamanhoTecla = document.querySelectorAll('.tecla');

for (let contador = 0; contador < tamanhoTecla.length; contador++){

    

    const tecla = tamanhoTecla[contador];

    const classeTecla = tecla.classList[1];

    const instrumento = `#audio_${classeTecla}`;

    tecla.onclick = function() {

        tocaSom(instrumento);

    }

}



