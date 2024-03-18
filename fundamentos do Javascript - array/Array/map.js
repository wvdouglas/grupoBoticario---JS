const notas = [10, 9.5, 8, 7, 6];

const notasAtualizada =  notas.map(( )=>{
    return nota + 1 >= 10 ? 10 : nota+1;
})

console.log(notas);
console.log(notasAtualizada);