import { Controller, Headers, Get, Post, Body, Delete, Param, Patch } from '@nestjs/common'
import { BookClientService } from '../../client'
import { CreateBookDto } from './dtos'

@Controller({
  path: 'book',
  version: '1',
})
export class BookController {
  //book-client
  readonly #_service: BookClientService
  //constructor
  constructor(service: BookClientService) {
    this.#_service = service
  }
  //get
  @Get()
  retrieveProductAll(@Headers('accept-language') language: string): Promise<any> {
    return this.#_service.reatrieveBook({
      language,
    })
  }
  //post
  @Post()
  createBook(@Body() body: CreateBookDto): Promise<any> {
    return this.#_service.createBook(body)
  }
  //update-book
  @Patch(':id')
  updateBook(@Param('id') id: string, @Body() body: any) {
    return this.#_service.updateBook(id, body)
  }
  //delete
  @Delete(':id')
  deleteBook(@Param('id') id: string): Promise<BookClientService | null> {
    return this.#_service.deleteBook(id)
  }
}
