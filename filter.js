const numeros = [1,2,3,4,5]

const pares = numeros.filter(num => num % 2 === 0)

// console.log("números pares", pares)

const produtos = [
    {
        nome:"Notebook",
        preco:3000
    },
    {
        nome:"Mouse",
        preco:50
    },
    {
        nome:"Monitor",
        preco:1200
    },
    {
        nome:"Teclado",
        preco:120
    },

    {
        nome:"Mouse",
        preco:1000
    }
]
    

const produtosMaioresQueMil = produtos.filter(produto => produto.preco >1000)

const mousesDoArray = produtos.filter(produto => produto.nome == "Mouse")
console.log(mousesDoArray)