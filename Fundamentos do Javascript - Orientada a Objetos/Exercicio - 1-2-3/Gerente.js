import Pessoa from "./Pessoa.js";

class Gerente extends Pessoa{
    constructor(nome, idade, email, cpf, nascimento, profissao = 'Gerente'){
        super(nome, idade, email, cpf, nascimento, profissao)
    }

    assinaturaMestre(){
        return `Eu ${this.nome}, autorizo a compra desse produto!!`
    }
}

const novoGerente = new Gerente('Douglas', '24', 'd@d.com.br', '111.111.111-11', '30-04-1999')

console.log(novoGerente)

console.log(novoGerente.assinaturaMestre());
