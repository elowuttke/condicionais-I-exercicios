console.log(" - EXERCÍCIO 2 CONDICIONAIS I -")

// Escreva uma função que receba três valores. Uma idade, um booleano que responda se a pessoa terminou ou não o ensino médio, e um booleano que responda se a pessoa está cursando alguma faculdade.
let age = Number(prompt("Digite sua idade:"))
let gradHighSchool = confirm("Concluiu Ensino Médio?")
let inUniversity = confirm("Está cursando faculdade?")

// Crie um if para cada variável, checando as seguintes afirmacões:
// Se a pessoa tem 18 anos ou mais;
// Se a pessoa terminou o ensino médio;
// Se a pessoa NÃO está cursando alguma faculdade;
// Crie um if que imprima que a afirmacão é verdadeira, e um else para imprimir que a afirmacão não é verdadeira.

// let idade;
// let isMaiorIdade;
// let isCursandoOutraFaculdade;

// if(){

// }else{
	
// }
function verifica(idade,concluiuEnsinoMedio,cursaFaculdade){
    if(idade>=18){
        console.log("Você tem 18 anos ou  mais!")
    }else{
        console.log("Você tem menos de 18 anos.")
    }

    if(concluiuEnsinoMedio){
        console.log("Você completou o Ensino Médio! Parabéns!")
    }else{
        console.log("Você não completou o Ensino Médio. Continue estudando :)")
    }

    if(!cursaFaculdade){
        console.log("A Faculdade BonsVentos tem excelentes opções de cursos.")
    }else{
        console.log("Bons estudos na faculade :)")
    }
}

verifica(age,gradHighSchool,inUniversity)