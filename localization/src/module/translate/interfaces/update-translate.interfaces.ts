import { DefinitionType } from '@prisma/client'

export declare interface UpdateTranslateRequestInterface {
  id: string
  type: DefinitionType
  code: string
  definition: Record<string, any>
}
