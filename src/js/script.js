// Defina a data do próximo aniversário
const proximoAniversario = new Date("2024-04-28");

// Função para atualizar o contador regressivo
function atualizarContador() {
    const agora = new Date();
    const diferenca = proximoAniversario - agora;

    if (diferenca <= 0) {
        clearInterval(timerAtualizacao);
        exibirCelebracao();
    } else {
        const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

        document.getElementById("timer").innerHTML = `Faltam: ${dias}d ${horas}h ${minutos}m ${segundos}s`;
    }
}

// Atualize o contador a cada segundo
const timerAtualizacao = setInterval(atualizarContador, 1000);

function exibirCelebracao() {
    document.getElementById("parabens1").style.display = "block";
}