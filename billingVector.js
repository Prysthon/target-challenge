// Importando os dados
const data = require('./dados.json');

// Filtrando a tabela para retirar os dias em que o valor = 0
const filteredData = data.filter(({ valor }) => valor !== 0);

// 1 - calculando o menor valor de faturamento ocorrido em um dia do mês;
const lowestBilling = filteredData.reduce((acc, cur) => {
  if (cur.valor < acc.valor) {
    return cur;
  } else {
    return acc;
  }
});

// 2 - calculando o maior valor de faturamento ocorrido em um dia do mês;
const biggestBilling = filteredData.reduce((acc, cur) => {
  if (cur.valor > acc.valor) {
    return cur;
  } else {
    return acc;
  }
});

// 3 -  calculando número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

// Cálculo da média
const billindMedia = (filteredData.reduce((acc, cur) => {
  return acc + cur.valor;
}, 0)) / filteredData.length;

// Calculo dos dias que ficaram abaixo da média
const daysLowerThanMedia = [];
filteredData.forEach((day) => {
  if (day.valor < billindMedia) {
    daysLowerThanMedia.push(day)
  }
});

// Exibindo resultados
console.log(`O menor faturamento do mês foi no dia ${lowestBilling.dia} com um valor de ${(lowestBilling.valor)}`);
console.log(`O maior faturamento do mês foi no dia ${biggestBilling.dia} com um valor de ${biggestBilling.valor}`);
console.log(`Com uma média de ${billindMedia.toFixed(4)}, foram localizados ${daysLowerThanMedia.length} abaixo da média`);
