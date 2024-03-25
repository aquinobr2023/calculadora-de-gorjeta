let conta = 0
let pessoa = 0

const contaInput = document.querySelector("#conta")
contaInput.addEventListener("input", receberValorConta )

function receberValorConta(evento) {
    conta = Number(evento.terget.value)
}

const pessoaInput = document.querySelector("#pessoas")
pessoaInput.addEventListener("input", recberQuantidadePessoas)

function recberQunatidadePessoas(evento) {
    const paragrafoErro = document.querySelector(".pessoas #erro")
    const divErro = document.querySelector(".pessoaa .input-box")



    if(evento.terget.value === "0") {
        paragrafoErro.style.display = "block"
        divErro.setAttribute("id", "erro-div")
    } else   {
        paragrafoErro.style.display = "none"
        divErro.setAttribute("id", "")
        pessoa = Number(evento.terget.value)
    }
}

const botoesGorjeta = document.querySelectorAll(".gorjeta input[type='button']")
botoesGorjeta.forEach(botao => {
    botao.addEventListener("click", receberPorcentagem )
})

function receberPorcentagem(evento){
    botoesGorjeta.forEach(botao => {
        botao.classList.remove("botao-ativo")

        if(botao.value === evento.target.value){
            botao.classList.add("botao-ativo")
        }   
    })


    if (evento.target.value !== "") {
        porcentagem = parseFloat(evento.target.value) / 100
    } else {
        porcentagem = 0
    }

    console.log(porcentagem)
}

const gorjetaInput = document.querySelector("#outra")
gorjetaInput.addEventListener("input",receberPorcentagem)