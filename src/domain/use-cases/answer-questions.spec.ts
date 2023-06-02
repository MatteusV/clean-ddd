import { expect, test } from 'vitest'
import { AnswerQuestionsUseCase } from './answer-questions'

test('Create an answer', () => {
  const answerQuestion = new AnswerQuestionsUseCase()

  const answer = answerQuestion.execute({
    questionId: '1',
    instructorId: '1',
    content: 'Nova resposta'
  })

  expect(answer.content).toEqual('Nova resposta')
})