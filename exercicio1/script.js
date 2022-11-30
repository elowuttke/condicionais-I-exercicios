console.log(" - EXERCÍCIO 1 CONDICIONAIS I -")
// Crie uma função que receba uma const numérica qualquer. Crie um if para verificar se o número guardado na const é par. Caso seja, a função deve retornar a mensagem: "o número é par". Após imprima o retorno no console.

let num = Number(prompt("Digite um número:"))

// if(num%2==0){
//     console.log(`O número ${num} é PAR.`);
// }

function ePar (x){
    if(x%2==0){
        console.log(`O número ${x} é PAR.`);
    }else if(x%2==1){
        console.log(`O número ${x} é IMPAR`)
    }  
}

ePar(num)