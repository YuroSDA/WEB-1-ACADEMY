// função para mostrar dica aleatória
function mostrarDica() {
    const dicas = [
        "Beba pelo menos 3 litros de água hoje!",
        "Mantenha a postura correta nos exercícios!",
        "O descanso é tão importante quanto o treino!",
        "Consuma proteínas após o treino."
    ];

    const indice = Math.floor(Math.random() * dicas.length);
    document.getElementById("dica").value = dicas[indice];
    const inputDica = document.getElementById("dica");
    inputDica.style.display = "block";
    
}

// Função do estilo de treino


function atualizarNivel() {
    let nivel = parseInt(document.getElementById("nivel").value);
    const inputNivel = document.getElementById("nivel");
    inputNivel.style.display = "inline";

    if (nivel <= 3) {
        alert("Deixa de Ser frango!!")
        inputNivel.style.display = "none";
    } else if (nivel <= 7) {
        alert("Estou te achando muito fraco!!")
        inputNivel.style.display = "none";
    } else {
        alert("Agora eu gostei!!!!")
        inputNivel.style.display = "none";
    }
    
}

function calcularIMC() {
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        document.getElementById("resultado").innerHTML =
            "Digite valores válidos!";
        return;
    }
    //Calculadora de IMC
    let imc = peso / (altura * altura);
    let classificacao = "";

    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc < 25) {
        classificacao = "Peso normal";
    } else if (imc < 30) {
        classificacao = "Sobrepeso";
    } else if (imc < 35) {
        classificacao = "Obesidade Grau I";
    } else if (imc < 40) {
        classificacao = "Obesidade Grau II";
    } else {
        classificacao = "Obesidade Grau III";
    }

    document.getElementById("resultado").innerHTML =
        `Seu IMC é <strong>${imc.toFixed(2)}</strong><br>Classificação: <strong>${classificacao}</strong>`;
}

console.log("script carregado com sucesso!");