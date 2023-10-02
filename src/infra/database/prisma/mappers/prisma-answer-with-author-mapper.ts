import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import { AnswerWithAuthor } from '@/domain/forum/enterprise/entities/value-objects/answer-with-author'
import {
  Answer as PrismaAnswer,
  User as PrismaUser,
  Attachment as PrismaAttachment,
} from '@prisma/client'
import { PrismaAttachmentMapper } from './prisma-attachment-mapper'

type PrismaAnswerWithAuthor = PrismaAnswer & {
  author: PrismaUser
  attachments: PrismaAttachment[]
}

export class PrismaAnswerWithAuthorMapper {
  static toDomain(raw: PrismaAnswerWithAuthor): AnswerWithAuthor {
    return AnswerWithAuthor.create({
      answerId: new UniqueEntityId(raw.id),
      content: raw.content,
      questionId: new UniqueEntityId(raw.questionId),
      authorId: new UniqueEntityId(raw.authorId),
      author: raw.author.name,
      attachments: raw.attachments.map(PrismaAttachmentMapper.toDomain),
      createdAt: raw.createdAt,
      updatedAt: raw.updatedAt,
    })
  }
}
