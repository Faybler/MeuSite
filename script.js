//Novidade! Atalhos do teclado … Os atalhos de teclado do Drive foram atualizados para oferecer navegação por letras iniciais
function hamburg(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform  = "translateY(0px)"
}
function cancel(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform  = "translateY(-500px)"
}

const botao = document.getElementById("botao")
const modal = document.querySelector("dialog")

botao.onclick = function (){
    modal.showModal()
}

function atualizarTempo() {
    let display = document.querySelector('.display'); //chama a div de classe display no html

    let agora = new Date(); // busca o horário do dispositivo em que foi executado

    let horario = corrigHr(agora.getHours()) + ':' + corrigHr(agora.getMinutes()) + ':' + corrigHr(agora.getSeconds());
    // usa a variavel "agora" com o comando new date e busca hora, minuto e segundo 
    display.textContent = horario;
    // modifica a div display do html com os dados das horas atualizados
}

function corrigHr(numero){ // essa função corrige o erro de os numeros do minutos qd estão menor que 10 aparece apenas um digito ex: 6 e não 06
    if (numero < 10) {
        numero = '0' + numero;
    }
    return numero;
}
atualizarTempo();
setInterval(atualizarTempo, 1000);

// for Typewriter effect

const texts = [
    "GOSTOSO",
    "CAMISA 10",
    "MENGÃO"
]

let speed = 100;

const textElements = document.querySelector(".typewriter-text")

let textIndex = 0;
let charcterIndex = 0;

function typeWriter() {
    if(charcterIndex < texts[textIndex].length){
        textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, speed); 
    }
    else{
        setTimeout(eraseText, 1000)
    }
}

function eraseText() {
    if(textElements.innerHTML.length > 0){
        textElements.innerHTML = textElements.innerHTML.slice(0,-1)
        setTimeout(eraseText, 50)
    }
    else{
        textIndex = (textIndex + 1) % texts.length;
        charcterIndex = 0;
        setTimeout(typeWriter,500)
    }
}

window.onload = typeWriter;