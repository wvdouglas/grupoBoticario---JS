function User(nome, email){
    this.nome= nome;
    this.email= email;

    this.exibirInfo = function (){
        return `${this.nome}, ${this.email}`
    }
} 

const user = {
    init: function(nome, email){
        this.nome= nome;
        this.email= email;
    },
    exibirInfo: function (nome){
        return this.nome;
    }
}


//exemplo 1
const pessoa = {
    init: function(nome, idade, nascimento){
        this.nome=nome;
        this.idade=idade;
        this.nascimento=nascimento;
    },
    exibirInfo:function(nome,idade,nascimento){
        return this.nome;
    }
}

const pessoa1 = Object.create(pessoa)
pessoa1.init('Taynara', '23', '19/04/2000')
console.log(pessoa1.exibirInfo())

// const novoUser = Object.create(user)
// novoUser.init('Douglas', 'd@d.com')
// console.log(novoUser.exibirInfo())
// console.log(novoUser.exibirInfo('Douglas'))
// console.log(user.isPrototypeOf(novoUser))

// const novoUser = new User('Douglas', 'd@d.com')
// console.log(novoUser.exibirInfo());

// function Admin(role){
//     User.call(this, 'Douglas', 'd@d.com')
//     this.role = role || 'Estudante'
// }

// Admin.prototype = Object.create(User.prototype)
// const novoUser = new Admin('admin')
// console.log(novoUser.exibirInfo())
// console.log(novoUser.role)
