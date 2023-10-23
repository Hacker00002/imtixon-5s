import { DefinitionType } from '@prisma/client'

export declare interface CreateTranslateRequestInterface {
  type: DefinitionType
  code: string
  definition: Record<string, string>
}
