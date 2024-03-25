let conta = 0
let pessoa = 0

const contaInput = document.querySelector("#conta")
contaInput.addEventListener("input", receberValorConta )

function receberValorConta(evento) {
    conta = Number(evento.terget.value)
}

const pessoaInput = document.querySelector("#pessoas")
pessoaInput.addEventListener("input", recberQunatidadePessoas)

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