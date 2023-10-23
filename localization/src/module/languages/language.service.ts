import type { Language } from '@prisma/client'
import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from '@prisma'
import type { CreateLanguageRequestInterface } from './interface'

@Injectable()
export class LanguageService {
  //readonly-language
  readonly #_prisma: PrismaService
  //constructor-prisma-service
  constructor(prisma: PrismaService) {
    this.#_prisma = prisma
  }
  //reating-all-language
  retrieveLanguageList(): Promise<Language[]> {
    return this.#_prisma.language.findMany()
  }
  //create-new-language-request
  async createLanguage(payload: CreateLanguageRequestInterface): Promise<void> {
    await this.#_checkLanguage({
      language_code: payload.language_code,
    })

    await this.#_prisma.language.create({
      data: {
        language_code: payload.language_code,
        language_title: payload.language_title,
      },
    })
  }
  //find-language-and-chack-language
  async #_checkLanguage(payload: { language_code: string }): Promise<void> {
    const language = await this.#_prisma.language.findFirst({
      where: {
        language_code: payload.language_code,
      },
    })

    if (language) {
      throw new NotFoundException('Language already exists')
    }
  }
}
