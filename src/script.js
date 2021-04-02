var numeroSecreto = parseInt(Math.random()*10)
//alert(numeroSecreto)
var tentativas = 3

while (tentativas > 0) {

    var chute = parseFloat(prompt("Digite um numero entre 0 e 10"))
    
    if (numeroSecreto == chute){
      document.write("<h2>"+"Acertou!"+"</h2>")
      break
    } else if (chute > numeroSecreto) {
      alert("O numero secreto é menor")
      tentativas = tentativas - 1
    } else if (chute < numeroSecreto) {
      alert("O numero secreto é maior")
      tentativas = tentativas - 1
    }
}
if (chute != numeroSecreto){
document.write("<h2>"+"Suas tentativas acabaram. O Numero Secreto era: " + numeroSecreto+"</h2>")
}