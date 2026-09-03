function verificarIdade() {
 
    const idade = Number(document.getElementById("idade").value);
 
    if (idade >= 18) {
        document.getElementById("resultadoIdade").textContent = "Você é maior de Idade";
    } else {
        document.getElementById("resultadoIdade").textContent = "Você é menor de Idade";
    }
}
 function verificarIdade() {
 
    const idade = Number(document.getElementById("idade").value);
 
    if (idade >= 18) {
        document.getElementById("ResultadoIdade").textContent = "Maior de Idade";
    } else {
        document.getElementById("ResultadoIdade").textContent = "Menor de Idade";
    }
 
}
 
 
function verificarNumero() {
 
    const numero = Number(document.getElementById("numero").value);
 
    if (numero > 0) {
        document.getElementById("ResultadoNumero").textContent = "O número é positivo.";
    } else if (numero < 0) {
        document.getElementById("ResultadoNumero").textContent = "O número é negativo.";
    } else {
        document.getElementById("ResultadoNumero").textContent = "O número é igual a zero.";
    }
 
}
 
 
function verificarNota() {
 
    const nota = Number(document.getElementById("nota").value);
 
    if (nota >= 7) {
        document.getElementById("ResultadoNota").textContent = "Aprovado";
    } else if (nota >= 5) {
        document.getElementById("ResultadoNota").textContent = "Recuperação";
    } else {
        document.getElementById("ResultadoNota").textContent = "Reprovado";
    }
 
}
 
function verificarLogin() {
 
    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;
 
    if (usuario === "admin" && senha === "1234") {
        document.getElementById("ResultadoLogin").textContent = "Login realizado com sucesso!";
    } else if (usuario === "admin" && senha !== "1234") {
        document.getElementById("ResultadoLogin").textContent = "Senha incorreta.";
    } else {
        document.getElementById("ResultadoLogin").textContent = "Usuário não encontrado.";
    }
 
}
 
function verificarIdadeTernario() {
 
    const idade = Number(document.getElementById("idadeTernario").value);
 
    const situacao = idade >= 18 ? "Maior de idade" : "Menor de idade";
 
    document.getElementById("ResultadoTernario").textContent = situacao;
 
}