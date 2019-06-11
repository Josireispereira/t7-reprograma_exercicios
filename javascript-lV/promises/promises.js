// exercício 1 = mostrar a resposta depois de dois segundos

let retornaPessoa = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("deu ruim")
        }, 2000)
    })
}

const job = () => {
    retornaPessoa().then((resposta) => alert(resposta))
        .catch((erro) => alert(erro))
}

// exercício 2 = 
// Sua função deve sempre retornar uma promise
// Se data não for um número, devolva uma promessa rejeitada instantaneamente e forneça a mensagem "deu ruim" (em uma string)
// Se data for um número ímpar, retorne uma promessa resolvida 1 segundo depois e forneça os dados "ímpar" (em uma string)
// Se data for um número par, retorne uma promessa rejeitada 2 segundos depois e forneça os dados "par" (em uma string)
// Dica: quando você codifica uma função que retorna uma promessa, certifique-se de sempre retornar uma promessa. Mesmo se você quiser lidar com um erro, basta retornar uma promessa e rejeitá-la.
//Dica: use isNaN(data) para verificar se os dados não são um número.

function retornaData(data) {
    return new Promise((resolve, reject) => {
        if (isNaN(data)) {
            reject("deu ruim");
        }

        else if ((data % 2) == 0) {
            setTimeout(() => {
                resolve(data + " é par") // ` ${dataé par}`
            }, 2000)
        }

        else {
            setTimeout(() => {
                resolve(data + " é impar")
            }, 1000)
        }
    });
}
function resposta(param){
        retornaData(param)
        .then((resolvida) => console.log(resolvida))
        // É A MESMA COISAAAAAAAAAAAAA
        //function resolvida(i){alert(i)}

        .catch((erro) => console.log(erro))
}

// versao da professora
//no github