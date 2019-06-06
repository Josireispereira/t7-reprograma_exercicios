const inputCEP = document.getElementById("cep");
const inputLogradouro = document.getElementById("logradouro");
const inputComplemento = document.getElementById("complemento");
const inputBairro = document.getElementById("bairro");
const inputLocalidade = document.getElementById("localidade");
const inputUF = document.getElementById("uf");

// como se fosse: function getData (url){}
const getData = url => {
    return new Promise((resolve, reject) => {
        const requisicao = new XMLHttpRequest();
        requisicao.open("GET", url);

        requisicao.onload = function () {
            if (reqisicao.status === 200) {
                const respostaHTML = JSON.parse(requisicao.responseText)
                resolve(respostaHTML)
            }
            else{
                reject("CEP inválido")
            }
        };
        requisicao.send();
    })
};

inputCEP.addEventListener("blur", () => {
    const valorCampo = inputCEP.value;
    getData(`https://viacep.com.br/ws/${valorCampo}/json/`)
        .then(resultadoAPI => {
            inputCEP.value = resultadoAPI.cep
            inputLogradouro.value = resultadoAPI.logradouro
            inputComplemento.value = resultadoAPI.complemento
            inputBairro.value = resultadoAPI.bairro
            inputLocalidade.value = resultadoAPI.localidade
            inputUF.value = resultadoAPI.uf
        })
})

// por trás dos panos do js eles são classes
// class XMLHttpRequest{
//     send (){function(){}}}

// class Promise {
//     then(){return dado}
//     catch(){function(){}}
//     return(resolve, reject) =}

// se não existisse postman, teriamos que testar se os valores:
// const exibeResultado = obj => {
//     console.log(obj.cep);

//     let endereco =
//         `<div>
//         <h3>O endereço do CEP é:</h3>
//         <p>CEP: ${obj.cep}</p>
//         <p>Logradouro: ${obj.logradouro}</p>
//         <p>Complemento: ${obj.complemento}</p>
//         <p>Bairro: ${obj.bairro}</p>
//         <p>Localidade: ${obj.localidade}</p>
//         <p>UF: ${obj.uf}</p>
//         </div>`
// };