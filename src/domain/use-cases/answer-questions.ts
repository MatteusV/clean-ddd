import { Answer } from '../entities/answer'
import { AnswersRepository } from '../repositories/answers-repository'

interface AnswerQuestionsUseCaseRequest {
  instructorId: string
  questionId: string
  content: string
}

export class AnswerQuestionsUseCase {
  constructor(private answerRepository: AnswersRepository) {}

  async execute({
    instructorId,
    questionId,
    content,
  }: AnswerQuestionsUseCaseRequest) {
    const answer = new Answer({ content, authorId: instructorId, questionId })

    await this.answerRepository.create(answer)

    return answer
  }
}
