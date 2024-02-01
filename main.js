
/*
## Objetivo:
Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através
do calculo (vitórias - derrotas)
*/


//Calcula o valor do rank do jogador
function rank(vitorias, derrotas){
    const saldoRank = vitorias - derrotas;
    const nivel = calculaNivel(saldoRank)
    
    return mensagem(vitorias, nivel)
}
//-----------------------------------------------------------------------------------------------------------

//Calcula o nivel do jogador recebendo como entrada o rank
/**
Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal
 */

function calculaNivel(saldo){
    if (saldo <= 10){
        return "ferro"
    }else if(saldo >= 11 && saldo <=20){
        return "bronze"
    }else if(saldo >= 21 && saldo <=50){
        return "prata"
    }else if(saldo >= 51 && saldo <= 80){
        return "outro"
    }else if(saldo >= 81 && saldo <= 90){
        return "diamante"
    }else if(saldo >= 91 && saldo <= 100){
        return "lendário"
    }else if(saldo >= 101){
        return "imortal"
    }
}
//-----------------------------------------------------------------------------------------------------------------------------------

/* Saída:
Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**""
*/

function mensagem(vitorias, nivel){
    return console.log(`O Herói tem de saldo de **${vitorias}** está no nível de **${nivel}**`)
}

rank(450,200)
