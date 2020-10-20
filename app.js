/*
Este exercício será um pouquinho diferente dos anteriores.

Seu desafio é desenvolver uma versão do quiz que:

- Aborda um tema diferente (não pode ser de filmes);
- Tem um tema de cores diferente do que foi apresentado na aula;
- Exibe na tela a pontuação que o usuário fez. Não há certo ou errado, apenas faça. Essa exibição de pontos é uma das implementações que faremos na próxima aula =D

Independente se você já fez o quiz dos filmes enquanto acompanhava a aula, tente fazer esse exercício sem rever partes da aula.

É importante que a sua versão do quiz seja feita apenas com o conteúdo que vimos até aqui.

Depois de fazer o que foi pedido acima, crie um repositório no GitHub para a sua aplicação e abra uma issue no repositório do curso com:

- O link da sua versão do quiz;
- Quais foram as suas maiores dúvidas ou dificuldades durante a execução desse exercício;
- Quais foram as suas menores dificuldades durante a execução desse exercício.

Link do repositório do curso: https://github.com/roger-melo-treinamentos/curso-de-js-roger-melo/issues

Ps: se você não conseguiu fazer tudo o que foi pedido acima, abra a issue mesmo assim =)
*/

const correctAnswers = ['B', 'A', 'A', 'B', 'B', 'A', 'A', 'B']
const form = document.querySelector('.quiz-form')
const results = document.querySelector('.resultados')

form.addEventListener('submit', event => {
  event.preventDefault()
  let points = 0
  let htmlMessage = ''
  const userAnswers = [
    form.resposta1.value,
    form.resposta2.value,
    form.resposta3.value,
    form.resposta4.value,
    form.resposta5.value,
    form.resposta6.value,
    form.resposta7.value,
    form.resposta8.value
  ]
  userAnswers.forEach((answer, index) => {
    const correctAnswer = answer === correctAnswers[index]
    if (correctAnswer) {
      points += 1
    }
  });
  let finalScore = (100 * points) / correctAnswers.length
  htmlMessage += `
  <p>Sua pontuação:</p>
  <h1>${finalScore}%</h1>
  <p>Questões acertadas: ${points}</p>
  <p>Obrigado por jogar :)</p>
  `
  results.innerHTML = htmlMessage
})
