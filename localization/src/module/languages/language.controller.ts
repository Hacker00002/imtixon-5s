import type { Language } from '@prisma/client'
import { Controller, Body, Get, Post } from '@nestjs/common'
import { LanguageService } from './language.service'
import { CreateLanguageDto } from './dtos'
//language-controller
@Controller({
  path: 'language',
})
//export-language-controller
export class LanguageController {
  //language-service
  readonly #_service: LanguageService
  //language-service-controller
  constructor(service: LanguageService) {
    this.#_service = service
  }
  //get-all-language
  @Get()
  retrieveLanguageList(): Promise<Language[]> {
    return this.#_service.retrieveLanguageList()
  }
  //create-language
  @Post()
  async createLanguage(@Body() payload: CreateLanguageDto): Promise<void> {
    await this.#_service.createLanguage(payload)
  }
}
