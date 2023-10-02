import { AnswerWithAuthor } from '@/domain/forum/enterprise/entities/value-objects/answer-with-author'
import { AttachmentPresenter } from './attachment-presenter'

export class AnswerWithAuthorPresenter {
  static toHTTP(answerWithAuthor: AnswerWithAuthor) {
    return {
      answerId: answerWithAuthor.answerId.toString(),
      authorId: answerWithAuthor.authorId.toString(),
      questionId: answerWithAuthor.questionId,
      authorName: answerWithAuthor.author,
      content: answerWithAuthor.content,
      attachments: answerWithAuthor.attachments.map(AttachmentPresenter.toHTTP),
      createdAt: answerWithAuthor.createdAt,
      updatedAt: answerWithAuthor.updatedAt,
    }
  }
}
