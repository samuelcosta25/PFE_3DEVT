// Exercício 1: Verificador de Turno e Prioridade
// Contexto: Na sua agenda, cada tarefa tem uma hora (0-23) e um nível de prioridade (1
// a 10). Tarefa: Escreva um script que:
// 1. Receba a hora e a prioridade.
// 2. Verifique se a hora está entre 0 e 11 (Manhã), 12 e 17 (Tarde) ou 18 e 23
// (Noite).
// 3. Use um operador lógico para imprimir “TAREFA CRÍTICA/URGENTE” se a
// prioridade for maior que 8 E o turno for "Manhã" ou “Tarde”.
// 4. Use um operador lógico para imprimir “TAREFA IMPORTANTE” se a prioridade
// for maior ou igual a 7 e menor que 9 E o turno for “Manhã” ou“Tarde”.
// 5. Use um operador lógico para imprimir “TAREFA NÃO IMPORTANTE”
// independentemente da prioridade E o turno for “Noite”. Esta agenda valoriza as
// noites para lazer e não para tarefas.
// 6. Imprima "Horário Inválido" caso o número esteja fora de 0-23 e “Nível de
// Prioridade Inválida” caso o número esteja fora de 1-10.

let hora = prompt("Digite a hora da tarefa: ");
let prioridade = prompt("Digite o nível de prioridade da tarefa: ");

if (hora >= 0 && hora <= 11) {
    alert("Turno: Manhã");
    if (prioridade > 8 && prioridade <= 10) {
        alert("TAREFA CRÍTICA/URGENTE");
    } else if (prioridade > 6 && prioridade > 0){
        alert("TAREFA IMPORTANTE");
    } else if (prioridade <= 6 && prioridade > 0) {
        alert("TAREFA NÃO IMPORTANTE");
    } else {
        alert("Digite um valor de prioridade válido.")
    }
} else if (hora >= 12 && hora <= 17) {
    alert("Turno: Tarde");
    if (prioridade > 8 && prioridade <= 10) {
        alert("TAREFA CRÍTICA/URGENTE");
    } else if (prioridade > 6 && prioridade > 0){
        alert("TAREFA IMPORTANTE");
    } else if (prioridade <= 6 && prioridade > 0) {
        alert("TAREFA NÃO IMPORTANTE");
    } else {
        alert("Digite um valor de prioridade válido.")
    }
} else if (hora >= 18 && hora <= 23) {
    alert("Turno: Noite");
    if (prioridade < 0 && prioridade > 10){
        alert("Digite um valor de prioridade válido.")
    }
    alert("TAREFA NÃO IMPORTANTE");
} else {
    alert("Horário Inválido");
}