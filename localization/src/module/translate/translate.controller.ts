import type { Definition } from '@prisma/client'
import { Controller, Body, Get, Post, Headers, Patch, Param } from '@nestjs/common'
import { TranslateService } from './translate.service'
import type { CreateTranslateRequestInterface, RetrieveTranslateRequestInterface, UpdateTranslateRequestInterface } from './interfaces'

@Controller({
  path: 'translate',
})
export class TranslateController {
  readonly #_service: TranslateService

  constructor(service: TranslateService) {
    this.#_service = service
  }

  @Get()
  retrieveTranslateList(@Headers('accept-language') language: string, @Body() payload: Pick<RetrieveTranslateRequestInterface, 'code'>): Promise<Pick<Definition, 'value'>> {
    return this.#_service.retrieveTranslateList({
      ...payload,
      language,
    })
  }

  @Post()
  async createTranslate(@Body() payload: CreateTranslateRequestInterface): Promise<void> {
    await this.#_service.createTranslate(payload)
  }

  @Patch(':id')
  async updateTranslate(@Param('id') id: string, @Body() payload: Omit<UpdateTranslateRequestInterface, 'id'>): Promise<void> {
    await this.#_service.updateTranslate({
      ...payload,
      id,
    })
  }
}
