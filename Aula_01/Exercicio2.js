// Exercício 2: Calculadora de Gastos Mensais
// Contexto: Você quer adicionar uma função financeira à agenda para calcular quanto
// sobra do salário após as contas. Tarefa: Crie um script que:
// 1. Receba as variáveis salario, aluguel, alimentacao e lazer.
// 2. Calcule o total de despesas e o saldo restante usando operadores aritméticos.
// 3. Use uma estrutura if/else para exibir:
// o "Saldo Positivo" se o saldo for maior que 0.
// o "No Limite" se o saldo for exatamente 0.
// o "Saldo Negativo" se o saldo for menor que 0.

let salario = prompt("Digite o valor do salário em R$: ");
let aluguel = prompt("Digite o valor do aluguel em R$: ");
let alimentacao = prompt("Digite o valor gasto em alimentação em R$: ");
let lazer = prompt("Digite o valor gasto em lazer em R$: ");

let despesas = aluguel + alimentacao + lazer;
let saldo = salario - despesas;

if (saldo > 0) {
    alert(`Saldo Positivo: R$ ${saldo}`);
} else if (saldo === 0) {
    alert("No Limite");
} else {
    alert(`Saldo Negativo: R$ ${saldo}`);
}