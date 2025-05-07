// let valor = 9
// valor++

// console.log(valor)

// function sequenciaNumerica(numeroInicial, numeroFinal){
//     for(let i = numeroInicial; i <= numeroFinal; i++){
//         console.log(i)
//     }
// }
// sequenciaNumerica(5, 20)

const frutas = ["Laranja", "Maçã", "Banana", "Mamão"]

frutas.push("Abacate")

// console.log(frutas.lenght)

// for(let i = 0; i < frutas.length; i++){
//     console.log(frutas[i])
// }

for(fruta of frutas){
    console.log(fruta)
}