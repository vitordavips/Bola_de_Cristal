const respostaElement = document.querySelector("#resposta")

const inputPergunta = document.querySelector("#inputPergunta")

const buttonPerguntar = document.querySelector('#buttonPerguntar')

const resposta = [
    "Não.",
    "Certeza!",
    "Não tenho tanta certeza.",
    "É decididamente assim.",
    "Não conte com isso.",
    "Sem dúvidas!.",
    "Pergunte novamente mais tarde.",
    "Sim, definitivamente!",
    "Minha resposta é não.",
    "Você pode contar com isso.",
    "Melhor não te dizer agora.",
    "A meu ver, sim.",
    "Minhas fontes dizem não.",
    "Provavelmente.",
    "Não é possivel prever agora.",
    "Perpectiva boa.",
    "As perspectivas não são tão boas.",
    "Sim.",
    "Concentre-se e pergunte novamente.",
    "Sinais apontam que sim.",
]



// clicar em fazer pergunta
function fazerPergunta() {

    if(inputPergunta.value == ""){
        alert("Digite a sua pergunta")
        return
    }

    //console.log("passou linha 40");

    buttonPerguntar.setAttribute("disabled", true)

    const pergunta = "<div>" + inputPergunta.value + "</div>"

    // gerar numero aleatorio
    const  totalResposta  = resposta.length
    const numeroAleatorio = Math.floor(Math.random() * totalResposta)

    //console.log("Valor Total Resposta: "+totalResposta);

    //console.log("Posicao da Variavel Resposta: "+numeroAleatorio);


    respostaElement.innerHTML = pergunta + resposta[numeroAleatorio]

    respostaElement.style.opacity = 1;

    //sumir respota depois de 3 segudos
    setTimeout(function() {
        respostaElement.style.opacity = 0; 
        buttonPerguntar.removeAttribute("disabled")
    }, 3000)
}

//1. Variáveis
// let estaChovendo = true //(O valor pode ser alterado)
// const meuName = "Vitor" //(O valor não pode ser alterado)

// 2. Tipos de dados
// String
// ""
// ''

// Number
// 12 - Integer (+ -)
// 3.2 - Float (+ -)

// Boolean
// true ou false
// const maiorDezoito = false

// underfined - indefinido

// 3. Operadores
// Atribuição (ex: =)
// atribuir valor
// let n1 = 12
// let n2 = 3

// console.log(n1 + n2)

// Aritméticos (ex: * / + -)
// Calculos matemáticos simples

//Comparação (ex: > < ==)
// transforma a expressão em true ou false
// const maiorQue = 1 > 2 // false
// const igualA = 1 == 1 // true

// 4. Condicional (if/else)
// const idade = 17
// const maiorDezoito = idade >= 18
// if(maiorDezoito) {alert("pode tirar a cateira de motorista")}
// else{alert("não pode tiraar a cateira de motorista")}

// 5. Dados
// Array - Vetor - Lista
 
// 6. Função
// 1 Criação 
//function nomeDaFunção() {
//  console.log('código dentro da funçaõ') }

// 2. Execução
// nomeDaFunção()

// Parâmetros
// function soma (a, b){
//    console.log(a + b)
// }
// soma(34, 45)
// soma(98, 54)

// 7 DOM - Document Object Model
// window.alert('arleta')
// document
// document.write("texto")
// manipilar elementos
// document.documentElement.style.background = "white"