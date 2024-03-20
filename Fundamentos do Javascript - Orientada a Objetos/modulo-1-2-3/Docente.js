import User from "./User.js";

class Docente extends User{
    constructor(nome, email, nascimento, role = 'docente', ativo = true){
        super(nome, email, nascimento, role, ativo)
    }

    aprovaEstudante(estudante, curso){
        return ` Estudante ${estudante} aprovado no curso ${curso}!!`
    }
}

const newDocente = new Docente('Pipoca', 'p@p.com', '30/04/1999');

console.log(newDocente);

console.log(newDocente.exibirInfo());

console.log(newDocente.aprovaEstudante('Douglas', 'JS'));