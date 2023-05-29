const divChute = document.getElementById('chute'); // Pega a div do chute que aparece na tela

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition; // API de reconhecimento de voz

const recognition = new SpeechRecognition();
recognition.lang= 'pt-BR'
recognition.start()

recognition.addEventListener('result', onSpeak) // Listener para executar a função onSpeak

function onSpeak (evento) { // Transcreve o que foi dito
    // console.log(evento);
    chute = evento.results[0][0].transcript
    exibeChuteNaTela(chute);
    verificaSeOChutePossuiUmValorValido(chute)
}

function exibeChuteNaTela (chute) { // Exibe o que foi dito na tela
    divChute.innerHTML = `
        <div>Você disse:</div>
        <span class="box">${chute}</span>
    `
}

recognition.addEventListener('end', () => recognition.start())