import User from "./User.js";

export default class Admin extends User{
    constructor(nome, email, nascimento, role = 'admin', ativo = true){
        super(nome, email, nascimento, role, ativo)
    }

    exibirInfo(){
        return `${this.nome}, ${this.email}, ${this.nascimento}, ${this.role}, ${this.ativo}`
    }

    criarCurso(nomeDoCurso, vagas){
        return `Curso de ${nomeDoCurso}, criado com ${vagas} Vagas!!`
    }


}
