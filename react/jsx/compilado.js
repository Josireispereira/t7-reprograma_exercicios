"use strict";

var app = document.getElementById('app'); // const template = `<h1>React no Reprograma, na ${a}</h1>`

var template = React.createElement("h2", null, "aaaaaaaaa"); // dois parametros, o que vai renderizar e onde, por exemplo elemento e container

ReactDOM.render(template, app); // ele não funciona com o template direto, precisamos compilar ele primeiro, com Babel
