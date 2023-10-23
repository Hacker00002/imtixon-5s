import type { DefinitionType, Language, Translate } from '@prisma/client'
import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from '@prisma'
import type { CreateTranslateRequestInterface, RetrieveTranslateRequestInterface, RetrieveTranslateResponseInterface, UpdateTranslateRequestInterface } from './interfaces'

@Injectable()
export class TranslateService {
  //readonly-prisma-service
  readonly #_prisma: PrismaService
  //constructor-prisma-service
  constructor(prisma: PrismaService) {
    this.#_prisma = prisma
  }
  //reatrive-prisma-service
  async retrieveTranslateList(payload: RetrieveTranslateRequestInterface): Promise<RetrieveTranslateResponseInterface> {
    const translate = await this.#_checkExistingCode({
      code: payload.code,
    })

    const language = await this.#_checkLanguage({
      code: payload.language,
    })

    const definition = await this.#_prisma.definition.findFirst({
      where: {
        translateId: translate.id,
        languageId: language.id,
      },
      select: {
        value: true,
      },
    })

    return {
      value: definition.value,
    }
  }
  //create-translate
  async createTranslate(payload: CreateTranslateRequestInterface): Promise<void> {
    await this.#_checkCode({
      code: payload.code,
    })

    const defintion = []

    for (const language in payload.definition) {
      const languageDefinition = await this.#_prisma.language.findFirst({
        where: {
          language_code: language,
        },
      })

      if (!languageDefinition) {
        throw new NotFoundException(`${language} not found`)
      }

      defintion.push({
        languageId: languageDefinition.id,
        value: payload.definition[language],
      })
    }

    await this.#_prisma.translate.create({
      data: {
        code: payload.code,
        type: payload.type,
        definition: {
          createMany: {
            data: defintion,
          },
        },
      },
    })
  }
  //update-translation
  async updateTranslate(payload: UpdateTranslateRequestInterface): Promise<void> {
    const translate = await this.#_prisma.translate.findFirst({
      where: {
        id: payload.id,
        code: payload.code,
      },
      select: {
        id: true,
      },
    })

    if (!translate) {
      throw new NotFoundException('Translation not found')
    }

    const defintion = []

    for (const language in payload.definition) {
      const languageDefinition = await this.#_prisma.language.findFirst({
        where: {
          language_code: language,
        },
      })

      if (!languageDefinition) {
        throw new NotFoundException(`${language} not found`)
      }

      defintion.push({
        languageId: languageDefinition.id,
        value: payload.definition[language],
      })
    }
  }
  //check-code
  async #_checkCode(payload: { code: string }): Promise<void> {
    const code = await this.#_prisma.translate.findFirst({
      where: {
        code: payload.code,
      },
    })

    if (code) {
      throw new ForbiddenException('Code already exists')
    }
  }
  //check-existing-code
  async #_checkExistingCode(payload: { code: string }): Promise<Pick<Translate, 'id'>> {
    const code = await this.#_prisma.translate.findFirst({
      where: {
        code: payload.code,
      },
      select: {
        id: true,
      },
    })

    if (!code) {
      throw new NotFoundException('Code does not exists')
    }

    return code
  }
  //check-language
  async #_checkLanguage(payload: { code: string }): Promise<Pick<Language, 'id'>> {
    const language = await this.#_prisma.language.findFirst({
      where: {
        language_code: payload.code,
      },
      select: {
        id: true,
      },
    })

    if (!language) {
      throw new NotFoundException('Language does not exists')
    }

    return language
  }
}
