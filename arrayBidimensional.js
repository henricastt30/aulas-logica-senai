// Função para gerar a tabuada de 1 a 10
function gerarTabuada() {
    let tabuada = [];
  
    // Preenche a matriz com os resultados das multiplicações
    for (let i = 1; i <= 10; i++) {
      let linha = [];
      for (let j = 1; j <= 10; j++) {
        linha.push(i * j);
      }
      tabuada.push(linha);
    }
  
    return tabuada;
  }
  
  // Função para exibir a tabuada no console
  function exibirTabuada(tabuada) {
    for (let i = 0; i < tabuada.length; i++) {
      console.log(tabuada[i].join(" | ")); // Exibe cada linha da tabuada
    }
  }
  
  // Gerar e exibir a tabuada
  let tabuada = gerarTabuada();
//   console.log(tabuada)
  exibirTabuada(tabuada);