class Usuario {
    constructor(email1, senha1) {
        this.email = email1;
        this.senha = senha1;
    }

    isAdmin() {
        if (this.admin == true) {
            console.log("é administrador!")
        }

        else {
            console.log("apenas um mortal")
        }

        // return this.admin == true ? true "é administrador!" : false "apenas um mortal"
    }
};

class Admin extends Usuario {
    constructor(email, senha) {
        super(email, senha);

        this.admin = true;
    }
};

const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');

// false console.log(User1.isAdmin()); 
// true console.log(Adm1.isAdmin()); 