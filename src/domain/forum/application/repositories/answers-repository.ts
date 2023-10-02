import { PaginationParams } from '@/core/repositories/pagination-params'
import { Answer } from '../../enterprise/entities/answer'
import { AnswerWithAuthor } from '../../enterprise/entities/value-objects/answer-with-author'

export abstract class AnswersRepository {
  abstract findById(id: string): Promise<Answer | null>
  abstract findManyByQuestionId(
    questionId: string,
    params: PaginationParams,
  ): Promise<Answer[]>

  abstract findManyByQuestionIdWithAuthor(
    questionId: string,
    params: PaginationParams,
  ): Promise<AnswerWithAuthor[]>

  abstract create(answer: Answer): Promise<void>
  abstract save(answer: Answer): Promise<void>
  abstract delete(answer: Answer): Promise<void>
}
