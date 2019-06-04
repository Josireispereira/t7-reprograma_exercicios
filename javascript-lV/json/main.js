const listaDeLivros = JSON.stringify(autores)
const listaDeLivroJS = JSON.parse(listaDeLivros)

const insertRows = parametro =>{
    let table1 = "";
    parametro.forEach(livro => {
        table1+= 
        `<tr>
            <td>${livro.livro}</td>
            <td>${livro.autor}</td>
            <td>${livro.genero}</td>
        </tr>`
    });
    return table1
}
const ordenarLivros = document.getElementById('ordenar-livro');
ordenarLivros.addEventListener('click', (e) => {
    listaDeLivroJS.livros.sort((livroA, livroB) => {
        if(livroA.toLowerCase() < livroB.toLowerCase(){
            return -1
        })
    })
})

document.getElementById("table-section").innerHTML = insertRows(listaDeLivroJS.livros);
// o listaDeLivroJS.livros é o array do outro arquivo, como:
// document.getElementById("table-section").innerHTML = insertRows(autores.livros);
