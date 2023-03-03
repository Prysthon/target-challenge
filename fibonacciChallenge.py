# Desafio Fibonacci

# Fibonacci é a soma dos dois primeiros números nos quais vão resultar no terceiro, e assim vai somando na sequencia "a + b = c, b + c = d..., c + d = e..", até encontrar a sequencia: [a, b, c, d, ...]

# Primeiramente, precisamos saber qual o número digitado pelo usuário que queremos saber se pertence a sequência
number = input("Escolha o número no qual você deseja saber se pertence a sequência de Fibonacci: \n\n")

# Agora, criaremos uma função que recebe como parâmetro o número escolhido pelo usuário e verificará se este número pertence a sequência
def fibonacciSequence(number):
  # Considerando que os dois primeiros números da sequência são "a" e "b", consideramos: 
  a = 0;
  b = 1;
  # Criamos um array para salvar os números da sequência
  sequence = [b];
  
  # Precisamos de um loop de repetição para saber se o número pertence a sequência ou ainda é menor, precisando saber o próximo número
  while True: 
    c = a + b;
    sequence.append(c);
    a, b = b, c;
    if (c == number):
      print ('\nO número {} pertence a Sequência de Fibonacci.'.format(number));
      return sequence;
      break
    elif (number < c):
      print ('\nO número {} não pertence a Sequência de Fibonacci.'.format(number));
      return sequence;
      break
    else:
      continue;

# Para finalizar, chamamos a função e em seguida exibimos na tela toda a sequência necesária para saber se o número digitado pelo usuário (n) está entre "n - 1" e "n + 1"
sequence = fibonacciSequence(int(number))
print('\nSequência:', sequence);