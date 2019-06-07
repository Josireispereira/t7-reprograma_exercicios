const inputUser = document.getElementById("username");
const inputPass = document.getElementById("password");
const form = document.getElementById("login-form");


form.addEventListener("submit", event => {
    event.preventDefault();

    const bodyEnviar = JSON.stringify({
        user: inputUser.value,
        pass: inputPass.value,
    });

    fetch("https://lais-api-reprograma.herokuapp.com/login", {
        method: "POST",
        body: bodyEnviar,
        headers: {
            "Accept": "application/json",
            "Content-type": "application/json"
        }
    })
        .then(res => res.json())
        .then(objetoJS => {
            localStorage.setItem('token', objetoJS.token);
            window.location.href = 'home.html'
        })
        .catch(error => console.log(error))
})

// ou fazer uma variavel requisição e chama-la no evento do submit