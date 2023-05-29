function verificaSeOChutePossuiUmValorValido(chute) { // O nome já diz né
    const numero = +chute

    if (chuteForInvalido(numero)) { // Função para strings ou NaN
        divChute.innerHTML += '<div>Valor inválido</div>';
        
    }

    if(numeroForMaiorOuMenorQueOValor(numero)) { // Função para verificar se é menor ou maior que o número secreto
        divChute.innerHTML += `<div>Valor inválido! Fale um número entre ${menorValor} e ${maiorValor}</div>`
        
    }

    if(numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>

        <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `    
    } else if (numero >  numeroSecreto) {
        divChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-sharp fa-solid fa-arrow-down"></i></div>
        `
    } else {
        divChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-sharp fa-solid fa-arrow-up"></i></div>
        `
    }


}

function chuteForInvalido(numero) { // Função para verificar se o chute é um número
    return Number.isNaN(numero);
}

function numeroForMaiorOuMenorQueOValor(numero) { // Função que retorna que o valor não está entre os números dos jogo
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', evento => { // Evento para recarregar a página
    if (evento.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})
