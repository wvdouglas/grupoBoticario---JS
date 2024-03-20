export default class User{
    constructor(nome, email, nascimento, role, ativo = true){
        this.nome=nome;
        this.email=email;
        this.nascimento=nascimento;
        this.role=role || 'Estudante';
        this.ativo=ativo;
    }

    exibirInfo(){
        return `${this.nome}, ${this.email}, ${this.nascimento}`
    }
}





// class Pessoa{
//     constructor(nome, idade, nascimento, cpf){
//         this.nome=nome;
//         this.idade=idade;
//         this.nascimento=nascimento;
//         this.cpf=cpf;
//     }

//     exibirInfo(){
//         return `${this.nome}, ${this.idade}, ${this.nascimento}, ${this.cpf} `
//     }
// }

// const newPessoa = new Pessoa('Taynara', '23', '30-04-2000', '111.111.111.11')
// const newPessoa1 = new Pessoa('Pipoca', '1', '30-04-2023', '222.222.222.12')

// console.log(newPessoa);
// console.log(newPessoa.exibirInfo());

// console.log(newPessoa1);
// console.log(newPessoa1.exibirInfo());