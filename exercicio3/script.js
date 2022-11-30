console.log(" - EXERCÍCIO 3 CONDICIONAIS I -")
// Crie uma função que receba do usuário sua nacionalidade, utilize um prompt que diga: "Escreva aqui sua nacionalidade" e guarde o valor da resposta em uma const nacionalidade.

// Vamos considerar que nosso programa aceita as seguintes 5 nacionalidades:

// brasileira;
// argentina;
// uruguaia;
// chilena;
// colombiana;
// Crie uma estrutura de if/else if/else que verifique se a nacionalidade guardada na const nacionalidade é igual a cada uma das nacionalidades acima, e caso seja, imprima a nacionalidade no console. O último else deve imprimir "nacionalidade não encontrada" caso o valor de nacionalidade não corresponda a nenhum dos valores.

let nacionalidade = prompt("Qual é a sua nacionalidade?").toLowerCase()

function nation(nationality){
    if(nationality==="brasileira"){
        console.log(nationality);
    }else if(nationality==="argentina"){
        console.log(nationality);
    }else if(nationality==="uruguaia"){
        console.log(nationality);
    }else if(nationality==="chilena"){
        console.log(nationality);
    }else if(nationality==="colombiana"){
        console.log(nationality);
    }else{
        console.log("nacionalidade não encontrada")
    }
}

nation(nacionalidade)