// Números inteiros: int()
//Números decimais: float()
function converter() {
    var inputTag = document.getElementById("valor-input");
    var inputConteudo = inputTag.value;

    //Transformando os valores em números;
    var valorEmDolar = parseFloat(inputConteudo);
   

    var valorEmReal = valorEmDolar * 5

    console.log(valorEmReal);
    /*
    var valorInput = document.getElementById("valor-input");
    console.log(valorInput);

    Da forma acima o meu console irá imprimir:
        <input type="number" id="valor-input" size="2" placeholder="Insira o valor a ser convertido">

    Para evitar isso faremos:
        var inputConteudo = inputTag.value;
        console.log(inputConteudo);
    Assim o console irá imprimir o valor inserido no input.
    */
   /*
   Nesta etapa temos que fazer o valor convertido ser "impresso" na tela do computador e para isso criamos um h2 com o id="valor-convertido":
   */
  var h2Convertido = document.getElementById("valor-convertido");
  var valorConvertido = "O resultado em real é R$ " + valorEmReal;

  /*Abaixo estamos dizendo: quero colocar dentro da tag h2 a var valorConvertido*/
  h2Convertido.innerHTML = valorConvertido;

}