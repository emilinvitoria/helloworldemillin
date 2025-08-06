function inserirNome(){
let nomeUsuario = prompt("Qual o seu nome");
   let elemento = document.querySelector("#nome-usuario");
   console.log(elemento);
   elemento.textContent = nomeUsuario;
}

const lista = document.querySelector('#lista');

lista.textContent = linguagens[0];
lista.textContent = linguagens[1];
lista.textContent = linguagens[2];

let aluno1 = {
nome:'Emilin',
idade:18,
anoLetivo:'3ºensino médio',
materiasFavoritas:['educação fisica']
}

console.log(aluno1.aluno);
console.log(aluno1.idade);
console.log(aluno1.);
console.log(aluno1.);

const objeto=document.querySelector('#aluno')
objeto.textContent=aluno1.nome;
console.log(aluno1.materialFavpritas);
console.log(aluno1.materiasFavoritas[1]);

