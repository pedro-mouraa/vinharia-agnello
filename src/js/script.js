document.addEventListener("DOMContentLoaded", () => {
// Espera a página terminar de carregar o HTML e só depois executa o JS   

    alert("Seja bem-vindo a Vinharia Agnello");
    // Mensagem de recepção para usuário

    let nomeVinho = prompt("Insira o nome do vinho: ");
    let tipoVinho = prompt("Insira o tipo de vinho (Tinto, Branco, Rosé): ");
    let safraVinho = parseInt(prompt("Insira a safra deste vinho:"));
    let quantVinho = parseInt(prompt("Insira a quantidade desse vinho no estoque: "));
    //// Criação de variáveis e valores atribuidos a elas

    alert("Dados registrados! Cheque o console para mais informações");
    // Alerta para usuário checar o console

    console.log("Bem-vindo ao console!");
    // Recpeção de usuário no console

    console.log(
        `Nome - ${nomeVinho} Tipo - ${tipoVinho} Safra - ${safraVinho} Quantidade - ${quantVinho} vinhos em estoque`
        // Exebição de informações armazenadas nas variáveis sobre o vinho
    );
});