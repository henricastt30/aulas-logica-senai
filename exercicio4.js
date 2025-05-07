const faturamento = {
    primeiroTrimestre: 10000,
    segundoTrimestre: 1,
    terceiroTrimestre: 999
}

const {primeiroTrimestre, segundoTrimestre, terceiroTrimestre} = faturamento

const media = ((primeiroTrimestre + segundoTrimestre + terceiroTrimestre) / 3).toFixed(2)

if(media >= 25000){
    console.log("Meta atingida!")
}
else{
    console.log("Meta não atingida!")
}