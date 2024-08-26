const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você acredita que exista distinção na escolha de uma criança na adoção?",
        alternativas: [
            {
                texto: "Sim, acredito que haja questões de padronização na hora da escolha pela busca não de uma família mas sim de uma família perfeita.",
                afirmacao: "Dentre os processos de adoção, cada 10 candidatos grande parte deles procura por crianças brancas, e só 4,2 escolhem crianças negras."
            },
            {
                texto: "Não, pois é uma escolha dos pais.",
                afirmacao: "Toda criança percorre pelo mesmo processo para se tornar filho, que passa pela convivência, pela decisão dos pais de amá-la, acolher e cuidar, sem nenhuma distinção."
            }
        ]
    },
    {
        enunciado: "Você acredita que as crianças afetadas pelo bullying adotivo tem sua autoestima prejudicada?",
        alternativas: [
            {
                texto: "Sim, pois podem sentir-sem descartadas.",
                afirmacao: "No Paraná, um estudo afirma que cerca de 25% das crianças e adolescentes tinham sinais de depressão."
            },
            {
                texto: "Não, pois elas possuem ajuda de pessoas do orfanato",
                afirmacao: "As crianças que abrigadas em orfanatos possuem grandes tendências a apresentar sintomas de depressão, dificuldade escolar e distorção de auto imagem, ocasionando maiores chances de envolvimento com drogas e álcool."
            }
        ]
    },
    {
        enunciado: "Você acredita que toda criança que é adotada é bem acolhida pela nova família?",
        alternativas: [
            {
                texto: "Sim, o governo trata de todos os cuidados com a criança.",
                afirmacao: "Há diversas brechas no processo adotivo, o que favorece práticas criminosas, como a comercialização, abuso sexual e exploração infantil."
            },
            {
                texto: "Não, pois o governo não tem estruturas suficientes para acompanhar o desenvolvimento da criança.",
                afirmacao: "Não existe nem uma porcentagem específica para tráfico de criança via adoção, portanto o governo não tem estruturas para fiscalizar tal ação."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();