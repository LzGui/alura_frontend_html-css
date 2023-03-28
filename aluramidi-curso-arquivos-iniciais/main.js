/*
function tocaSomClap() {
    document.querySelector('#som_tecla_clap').play()
}

document.querySelector('.tecla_clap').onclick = tocaSomClap
*/

function tocaSom(idAudio) {
    const elemento = document.querySelector(idAudio)

    if (elemento && elemento.localName === 'audio') {
        elemento.play()
    }

    else {
        console.log('Elemento não encontrado')
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla')

for (let i = 0; i < listaDeTeclas.length; i++) {
    const tecla = listaDeTeclas[i]
    const instrumento = tecla.classList[1]
    const idAudio = `#som_${instrumento}` //template string

    tecla.onclick = function () {
        tocaSom(idAudio)
    }

    tecla.onkeydown = function (evento) {
        console.log(evento.code === 'Space')

        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa')
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa')
    }
}
