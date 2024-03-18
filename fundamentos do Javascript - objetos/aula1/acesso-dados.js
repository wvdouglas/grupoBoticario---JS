const cliente = {
    nome: "Luke",
    idade : 50,
    cpf : "11122233344",
    email: "andre@dominio.com"
}

console.log(`Bom dia, ${cliente.nome}!!`);


console.log(`Os 3 primeiros digitos do CPF são, ${cliente.cpf.substring(0, 3)}!!`);

