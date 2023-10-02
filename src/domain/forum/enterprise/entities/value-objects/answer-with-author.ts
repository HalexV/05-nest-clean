import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import { ValueObject } from '@/core/entities/value-object'
import { Attachment } from '../attachment'

export interface AnswerWithAuthorProps {
  answerId: UniqueEntityId
  content: string
  questionId: UniqueEntityId
  authorId: UniqueEntityId
  author: string
  attachments: Attachment[]
  createdAt: Date
  updatedAt?: Date | null
}

export class AnswerWithAuthor extends ValueObject<AnswerWithAuthorProps> {
  get answerId() {
    return this.props.answerId
  }

  get content() {
    return this.props.content
  }

  get questionId() {
    return this.props.questionId
  }

  get authorId() {
    return this.props.authorId
  }

  get author() {
    return this.props.author
  }

  get attachments() {
    return this.props.attachments
  }

  get createdAt() {
    return this.props.createdAt
  }

  get updatedAt() {
    return this.props.updatedAt
  }

  static create(props: AnswerWithAuthorProps) {
    return new AnswerWithAuthor(props)
  }
}
