let resultados = [
    {
        titulo: "Ginger Champagne",
        ingredientes: "champagne, ginger, ice, vodka",
        imagem: "http://img.recipepuppy.com/1.jpg"
    },
    {
        titulo: "Potato and Cheese Frittata",
        ingredientes: "cheddar cheese, eggs, olive oil, onions, potato, salt",
        imagem: "http://img.recipepuppy.com/2.jpg"
    },
    {
        titulo: "Eggnog Thumbprints",
        ingredientes: "brown sugar, butter, butter, powdered sugar, eggs, flour, nutmeg, rum, salt, vanilla extract, sugar",
        imagem: "http://img.recipepuppy.com/3.jpg"
    },
    {
        titulo: "Succulent Pork Roast",
        ingredientes: "brown sugar, garlic, pork chops, water",
        imagem: "http://img.recipepuppy.com/4.jpg"
    },
    {
        titulo: "Irish Champ",
        ingredientes: "black pepper, butter, green onion, milk, potato, salt",
        imagem: "http://img.recipepuppy.com/5.jpg"
    }
];



const createCard = (receita) => {
    return (
        `<div class="container">
        <div class="card">
            <img class="imagem" src="${receita.imagem}" alt="img" />
            <div class="">
                <h2>${receita.titulo}</h5>
                <p class="ingredientes">
                    <span class='negrito'>Ingredients: </span>
                    ${receita.ingredientes}
                </p>
            </div>
        </div>`
    )
};

document.body.innerHTML += resultados.map(criaCard).join("");

// for(contador =0;contador<resultados.length;contador++){
//     document.body.innerHTML+= criaCard(resultados[contador])
// }