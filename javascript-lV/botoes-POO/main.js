class Botao {
  // criamos uma classe porque precisamos criar um componente
  // de botão, pois iremos reutilizá-lo varias vezes
  // de cores e texto diferentes
  constructor (cor, tamanho, texto, icone, url){
    // fazemos o construtor para definir os atributos
    // que a nossa classe terá
    this.cor = cor
    this.tamanho = tamanho
    this.texto = texto
    this.icone = icone
    this.url = url
  }

  desenhaBotao(){
    // desenha botão é um método para inserir o botão
    // na tela quando invocado
    const novoBotaoNoDom = document.createElement('button');
    // novoBotaoNoDom agora é uma tag button vazia
    // e precisamos inserir o atributo class no html
    // para colocar nossas classes css
    novoBotaoNoDom.setAttribute("class", `${this.cor} ${this.tamanho}`);
    // inserimos texto no html
    if(this.icone){
      //se this.icone tiver algum valor... (há alguns botões que não tem ícone e por isso ficam undefined)
      // crio uma nova tag <i></i>  para poder inserir o ícone com fontawesome
      const tagIcone = document.createElement("i")
      //crio uma classe css para inserir qual ícone do fontawesom eu quero
      tagIcone.setAttribute("class", `fas ${this.icone}`)
      // insiro essa tag <i class="fa fa...."></i> dentro do botão      
      novoBotaoNoDom.appendChild(tagIcone)
      // crio um texto
      const text = document.createTextNode(this.texto)
      //e insiro dentro do botão tambrm
      novoBotaoNoDom.appendChild(text)
    }else{
      //se this.icone , não tiver valor, for false, null ou undefined...
      novoBotaoNoDom.innerHTML = this.texto
    }
     // inserimos botão na tela
    document.getElementById("buttons-section").appendChild(novoBotaoNoDom);
  }
}

// criamos um novo botão
const novoBotao = new Botao('branco-c-borda', 'grande', 'default');
// desenhamos ele na tela
novoBotao.desenhaBotao();

const botaoClaro = new Botao('roxo-claro', 'grande', 'default');
botaoClaro.desenhaBotao();

const botaoRoxo = new Botao('roxo', 'pequeno', 'default', 'fa-plus-circle');

botaoRoxo.desenhaBotao();