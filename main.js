// Função para calcular o fatorial de um número
function fatorial(num) {
  if (num <= 1) return 1;
  return num * fatorial(num - 1);
}

// Função para calcular combinações (nCr = n! / [r! * (n - r)!])
function calcularCombinacao(n, p) {
  if (p > n) return 0; // Caso p seja maior que n, a combinação é impossível
  return fatorial(n) / (fatorial(p) * fatorial(n - p));
}

// Manipulação do DOM para calcular e mostrar o resultado
document.getElementById('combinationForm').addEventListener('submit', function (event) {
  event.preventDefault();
  
  const n = parseInt(document.getElementById('n').value);
  const p = parseInt(document.getElementById('p').value);
  
  if (isNaN(n) || isNaN(p) || n < 0 || p < 0) {
    alert("Por favor, insira valores válidos para n e p.");
    return;
  }
  
  const resultado = calcularCombinacao(n, p);
  
  document.getElementById('resultado').textContent = C(${n}, ${p}) = ${resultado};
});
