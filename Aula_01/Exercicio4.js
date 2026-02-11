// Exercício 4: Contador de Dias para o Evento
// Contexto: Sua agenda precisa calcular quantos dias faltam para um compromisso.
// Tarefa: Desenvolva um script que:
// 1. Crie um objeto de data para a "Data de Hoje" e outro para a "Data do Evento".
// 2. Calcule a diferença em milissegundos entre elas.
// 3. Converta essa diferença para dias (Dica: $1 \text{ dia} = 24 \times 60 \times 60
// \times 1000 \text{ ms}$).
// 4. Use a função Math.ceil() para arredondar o resultado para cima.
// 5. Exiba no console: "Faltam X dias para o seu compromisso!".

let dataHoje = new Date(); // Pega a data atual
let dataEvento = new Date('2026-12-25'); // Exemplo: Natal de 2026

// Diferença em milissegundos
let diferencaMs = dataEvento - dataHoje;

// Conversão: ms -> segundos -> minutos -> horas -> dias
let umDiaMs = 24 * 60 * 60 * 1000;
let diasFaltando = Math.ceil(diferencaMs / umDiaMs);

alert(`Faltam ${diasFaltando} dias para o seu compromisso!`);