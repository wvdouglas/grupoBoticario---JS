const user = {
    nome: "Douglas",
    email: "d@d.com",
    nascimento: "2021/02/02",
    role:"estudante",
    ativo: true,
    exibirInfos: function(){
        console.log(this.nome, this.email)
    }
}

const admin = {
    nome: "Mariana",
    email:"m@m.com",
    role:"admin",
    criarCurso: function(){
        console.log("Curso criado!")
    }
}

Object.setPrototypeOf(admin, user)
admin.criarCurso()
admin.exibirInfos()
