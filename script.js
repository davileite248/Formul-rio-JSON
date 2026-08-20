function enviarFormulario() {
    console.log("Apertouu")

    // Capturar os valores do input e criar variável para o objeto JSON

    let contaCliete = new Object()

    contaCliete.nome = document.getElementById("nomeDigitado").value
    contaCliete.sobrenome = document.getElementById("sobrenomeDigitado").value
    contaCliete.datadenascimento = document.getElementById("datanasciDigitada").value
    contaCliete.rg = document.getElementById("rgDigitado").value
    contaCliete.cpf = document.getElementById("cpfDigitado").value
    contaCliete.nacionalidade = document.getElementById("nacionalidadeDig").value
    contaCliete.naturalidade = document.getElementById("naturalidadeDig").value
    contaCliete.altura = document.getElementById("alturaDigitada").value
    contaCliete.peso = document.getElementById("pesoDigitado").value

    let meuJSON = JSON.stringify(contaCliete)

    console.log(meuJSON)

    console.log(contaCliete.valueOf())
}