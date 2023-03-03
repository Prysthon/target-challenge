const data = [
  {state: 'SP', value: 67836.43}, 
  {state: 'RJ', value: 36678.66}, 
  {state: 'MG', value: 29229.88}, 
  {state: 'ES', value: 27165.48}, 
  {state: 'Outros', value: 19849.53}, 
]

// Cálculo da média
const valueMedia = (data.reduce((acc, cur) => {
  return acc + cur.value;
}, 0)) / data.length;

// Exibindo resultados
data.forEach(({ state, value }) => {
  const percentual = value / valueMedia * 100;
  console.log(`${state} representa(m) R$${value} do faturamento total da distribuidora.`)
})