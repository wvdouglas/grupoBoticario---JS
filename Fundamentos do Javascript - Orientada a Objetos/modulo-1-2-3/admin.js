import User from "./User.js";

class Admin extends User{
    constructor(nome, email, nascimento, role = 'admin', ativo = true){
        super(nome, email, nascimento, role, ativo)
    }

    criarCurso(nomeDoCurso, vagas){
        return `Curso de ${nomeDoCurso}, criado com ${vagas} Vagas!!`
    }
}


const newAdmin = new Admin('Luke', 'l@l.com', '20-06-2023')

console.log(newAdmin.criarCurso('Js', 20))
