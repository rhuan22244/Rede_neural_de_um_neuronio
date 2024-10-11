let perguntas = [
    {
        identificador: "verificar-carro-liga",
        pergunta: "O carro liga ou dá algum sinal que está funcionando?",
        respostas: [
            {
                respostaPossivel: "Sim",
                redireciona: "carro-com-sinal-de-fumaça"
            },
            {
                respostaPossivel: "Não",
                redireciona: "testar-bateria-separadamente"
            },
            {
                respostaPossivel: "Não sabe/Não tem certeza",
                redireciona: "sabe-ligar-carro"
            },
        ]
    },
    {
        identificador: "sabe-ligar-carro",
        pergunta: "Você sabe ligar o carro?",
        respostas: [
            {
                respostaPossivel: "Sim",
                redireciona: "verificar-carro-liga"
            },
            {
                respostaPossivel: "Não",
                resposta: "Precisa de ajuda de alguém com mais conhecimento"
            },
        ]
    },
    {
        identificador: "testar-bateria-separadamente",
        pergunta: "Após testar a bateria separadamente, ela apresentou algum problema?",
        respostas: [
            {
                respostaPossivel: "Sim",
                redireciona: "testar-botao-de-partida",
                diagnostico: "Bateria"
            },
            {
                respostaPossivel: "Não",
                redireciona: "testar-botao-de-partida"
            },
            {
                respostaPossivel: "Não sei",
                redireciona: "sabe-testar-bateria"
            },
        ]
    },
    {
        identificador: "sabe-testar-bateria",
        pergunta: "Você sabe testar uma bateria de carro?",
        respostas: [
            {
                respostaPossivel: "Sim",
                redireciona: "testar-bateria-separadamente"
            },
            {
                respostaPossivel: "Não",
                resposta: "Precisa de ajuda de alguém com mais conhecimento"
            },
        ]
    },
    {
        identificador: "testar-botao-de-partida",
        pergunta: "Após testar o botão de partida separado, você identificou algum problema?",
        respostas: [
            {
                respostaPossivel: "Sim",
                redireciona: "testar-cabo-de-alimentacao",
                diagnostico: "Botão de partida"
            },
            {
                respostaPossivel: "Não",
                redireciona: "testar-cabo-de-alimentacao"
            },
            {
                respostaPossivel: "Não sei",
                redireciona: "sabe-testar-botao-partida"
            },
        ]
    },
    {
        identificador: "sabe-testar-botao-partida",
        pergunta: "Você sabe testar o botão de partida do carro?",
        respostas: [
            {
                respostaPossivel: "Sim",
                redireciona: "testar-botao-de-partida"
            },
            {
                respostaPossivel: "Não",
                resposta: "Precisa de ajuda de alguém com mais conhecimento"
            },
        ]
    },
    {
        identificador: "testar-cabo-de-alimentacao",
        pergunta: "Você testou o cabo de alimentação e apresentou algum problema?",
        respostas: [
            {
                respostaPossivel: "Sim",
                redireciona: "verificar-carro-liga",
                diagnostico: "Cabo de alimentação"
            },
            {
                respostaPossivel: "Não",
                redireciona: "verificar-carro-liga"
            },
            {
                respostaPossivel: "Não sei",
                redireciona: "sabe-testar-cabo-alimentacao"
            },
        ]
    },
    {
        identificador: "sabe-testar-cabo-alimentacao",
        pergunta: "Você sabe testar o cabo de alimentação do carro?",
        respostas: [
            {
                respostaPossivel: "Sim",
                redireciona: "testar-cabo-de-alimentacao"
            },
            {
                respostaPossivel: "Não",
                resposta: "Precisa de ajuda de alguém com mais conhecimento"
            },
        ]
    },
    {
        identificador: "carro-com-sinal-de-fumaça",
        pergunta: "O carro liga normalmente e dá sinal de fumaça?",
        respostas: [
            {
                respostaPossivel: "Sim",
                redireciona: "testou-oil",
            },
            {
                respostaPossivel: "Não",
                redireciona: "testar-sinal-de-vida"
            }
        ]
    },
    {
        identificador: "testar-sinal-de-vida",
        pergunta: "Ele dá sinal de vida mas não dá sinal de funcionamento?",
        respostas: [
            {
                respostaPossivel: "Sim",
                redireciona: "testou-ignicao",
            },
            {
                respostaPossivel: "Não",
                redireciona: "carro-com-sinal-de-fumaça"
            },
            {
                respostaPossivel: "Não sei",
                redireciona: "sabe-ligar-carro"
            }
        ]
    },
    {
        identificador: "testou-ignicao",
        pergunta: "Você testou o sistema de ignição separadamente e ele apresentou algum defeito?",
        respostas: [
            {
                respostaPossivel: "Sim",
                redireciona: "testou-bomba-de-combustivel",
                diagnostico: "Sistema de ignição"
            },
            {
                respostaPossivel: "Não",
                redireciona: "testou-bomba-de-combustivel"
            },
            {
                respostaPossivel: "Não sei",
                resposta: "Precisa de ajuda de alguém com mais conhecimento"
            }
        ]
    },
    {
        identificador: "testou-bomba-de-combustivel",
        pergunta: "Você testou a bomba de combustível separadamente e ela apresentou algum problema?",
        respostas: [
            {
                respostaPossivel: "Sim",
                redireciona: "testou-filtro-de-combustivel",
                diagnostico: "Bomba de combustível"
            },
            {
                respostaPossivel: "Não",
                redireciona: "testou-filtro-de-combustivel"
            },
            {
                respostaPossivel: "Não sei",
                resposta: "Precisa de ajuda de alguém com mais conhecimento"
            }
        ]
    },
    {
        identificador: "testou-filtro-de-combustivel",
        pergunta: "Você testou o filtro de combustível separadamente e ele apresentou algum problema?",
        respostas: [
            {
                respostaPossivel: "Sim",
                redireciona: "verificou-sistema-de-exaustao",
                diagnostico: "Filtro de combustível"
            },
            {
                respostaPossivel: "Não",
                redireciona: "verificou-sistema-de-exaustao"
            },
            {
                respostaPossivel: "Não sei",
                resposta: "Precisa de ajuda de alguém com mais conhecimento"
            }
        ]
    },
    {
        identificador: "verificou-sistema-de-exaustao",
        pergunta: "Você verificou o sistema de exaustão e ele apresentou algum problema?",
        respostas: [
            {
                respostaPossivel: "Sim",
                redireciona: "fim",
                diagnostico: "Sistema de exaustão"
            },
            {
                respostaPossivel: "Não",
                redireciona: "fim"
            },
            {
                respostaPossivel: "Não sei",
                resposta: "Precisa de ajuda de alguém com mais conhecimento"
            }
        ]
    },
]

diagnostico = [];
const readline = require('readline');
const respostaInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function fazPergunta(pergunta) {
    return new Promise((resolve) => {
        respostaInterface.question(pergunta, (resposta) => {
            resolve(resposta);
        })
    })
}

Object.prototype.hasOwnProperty = function(property) {
    return this[property] !== undefined;
};


// Motor de inferência
async function processNode(node) {
    let opcoes = "\n";
    for (let index = 0; index < node.respostas.length; index++) {
        opcoes += index + " - " + node.respostas[index].respostaPossivel + "\n";
    }
    let respostaEscolhida = await fazPergunta(node.pergunta + opcoes);

    if(node.respostas[respostaEscolhida].hasOwnProperty('diagnostico'))
    {
        diagnostico.push(node.respostas[respostaEscolhida].diagnostico);
    }

    if (node.respostas[respostaEscolhida].hasOwnProperty('redireciona'))
    {
        let identificador = node.respostas[respostaEscolhida].redireciona;
        if(identificador === 'fim') {
            return false;
        }
        var otherNode = perguntas.find(item => item.identificador == identificador);
        return await processNode(otherNode);
    }

    if(node.respostas[respostaEscolhida].hasOwnProperty('resposta')) {
        console.log(node.respostas[respostaEscolhida].resposta);
        return false;
    }
}

async function iniciarPerguntas(perguntas) {
    resposta = await processNode(perguntas[0]);
    respostaInterface.close();

    if(diagnostico.length > 0) {
        console.log("Problemas identificados no computador:");
        for (let index = 0; index < diagnostico.length; index++) {
            console.log(diagnostico[index] + "\n");
        }
    }else {
        console.log("Nenhum problema foi identificado.");
    }   
}

iniciarPerguntas(perguntas);

