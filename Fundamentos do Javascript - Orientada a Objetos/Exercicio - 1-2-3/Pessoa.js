export default class Pessoa{
    constructor(nome, idade, email, cpf, nascimento, profissao){
        this.nome=nome;
        this.idade=idade;
        this.email=email;
        this.cpf=cpf;
        this.nascimento=nascimento;
        this.profissao=profissao;
    }
    exibirInfo(){
        return `${this.nome}, ${this.idade}, ${this.email}, ${this.nascimento}`
    }
}