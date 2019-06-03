// array com as infos que serão usadas no map
let fotografias = [
    {
        url: 'https://github.com/reprograma',
        imagem: 'images/pic01.jpg',
        titulo: 'Nascetur nunc varius commodo',
        descricao: 'Interdum amet accumsan placerat commodo ut amet aliquam blandit nunc tempor lobortis nunc non. Mi accumsan.'
    },
    {
        url: 'https://github.com/reprograma',
        imagem: 'images/pic02.jpg',
        titulo: 'Skate',
        descricao: 'Interdum skate accumsan placerat commodo ut amet aliquam blandit nunc tempor lobortis nunc non. Mi accumsan.'
    },
    {
        url: 'https://github.com/reprograma',
        imagem: 'images/pic03.jpg',
        titulo: 'Luzes',
        descricao: 'Interdum amet accumsan placerat commodo ut amet aliquam blandit nunc tempor lobortis nunc non. Mi accumsan.'
    },
    {
        url: 'https://github.com/reprograma',
        imagem: 'images/pic04.jpg',
        titulo: 'Menina',
        descricao: 'Interdum amet accumsan placerat commodo ut amet aliquam blandit nunc tempor lobortis nunc non. Mi accumsan.'
    },
    {
        url: 'https://github.com/reprograma',
        imagem: 'images/pic05.jpg',
        titulo: 'Nascetur nunc varius commodo',
        descricao: 'Interdum amet accumsan placerat commodo ut amet aliquam blandit nunc tempor lobortis nunc non. Mi accumsan.'
    },
    {
        url: 'https://youtu.be/s6zR2T9vn2c',
        imagem: 'images/pic06.jpg',
        titulo: 'Nascetur nunc varius commodo',
        descricao: 'Interdum amet accumsan placerat commodo ut amet aliquam blandit nunc tempor lobortis nunc non. Mi accumsan.'
    },

]

// ou let novaLista = lista.map(item) => { return `<div></div>`}).join("");
// return novaLista;
// map sempre tem que ter um return!!

// função de map
const createThumb = (thumbnail) => {
    return thumbnail.map((item) => { // esse return armazena na função
        return ( // esse return nao armazena o array
            `<div class="box">
                <img src="${item.imagem}" alt="" class="image fit"/>
                <div class="inner" >
                    <h3>${item.titulo}</h3>
                    <p>${item.descricao}
                    </p>
                <a href="${item.url}" class="button fit" data-poptrox="youtube,800x400">Watch</a>
                </div>
        </div>
        `)
    }).join("");
};

// monstrar na tela (inner)
document.querySelector("#cards").innerHTML += createThumb(fotografias);

// função filtro no botão
const button = document.querySelector("button");
function clicar() {
    const inputValue = document.querySelector("input").value;
    let filtro = fotografias.filter((item) => {
        return item.titulo.toUpperCase().includes(inputValue.toUpperCase()) || item.descricao.toUpperCase().includes(inputValue.toUpperCase())
    })

    // monstrar na tela (inner)
    document.querySelector("#cards").innerHTML = createThumb(filtro);
}

button.addEventListener("click", clicar);

// evento da tecla enter
document.addEventListener('keypress', function (event) {
    const tecla = event.key;
    if (tecla == "Enter") {
        clicar();
    }
});



function limpar(val) {


    document.querySelector("#cards").innerHTML = createThumb(fotografias);
}

// 

function ordenar() {
    let ordenar = 
}