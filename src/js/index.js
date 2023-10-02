// OBJ1-PASS1
const botoes = document.querySelectorAll(".botao");
// OBJ2 PASS1
const personagens = document.querySelectorAll(".personagem");

//PASS3 e PASS2
botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        desselecionarBotao();
        botao.classList.add("selecionado");

        desselecionarPersonagem();
        personagens[indice].classList.add("selecionado");
    });
});

function desselecionarPersonagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}
