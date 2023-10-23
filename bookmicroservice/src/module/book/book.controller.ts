import type { Book } from '@prisma/client'
import { Controller, Delete, Param } from '@nestjs/common'
import { MessagePattern, Payload } from '@nestjs/microservices'
import { BookService } from './book.service'
import { BookRetrieveAllDto, CreateBookDto } from './dtos'

@Controller()
export class BookController {
  //book-service-readonly
  readonly #_service: BookService
  //book-service-controller
  constructor(service: BookService) {
    this.#_service = service
  }
  //reatrieve-book
  @MessagePattern('cmd:book-retrieve')
  async retrieveProductAll(@Payload() payload: BookRetrieveAllDto): Promise<Book[]> {
    console.log(payload)
    return await this.#_service.retrieveBookAll(payload)
  }
  //get-one-book
  @MessagePattern('cmd:book-get-one')
  async getOneBook(@Payload() id: string) {
    return await this.#_service.getOneBook(id)
  }
  //create-book
  @MessagePattern('cmd:book-create')
  async createProduct(@Payload() payload: CreateBookDto): Promise<null> {
    return await this.#_service.createBook(payload)
  }
  //update-book
  @MessagePattern('cmd:book-update')
  async updateBook(@Payload() payload: any) {
    return await this.#_service.updateBook(payload)
  }
  //delete-book
  @MessagePattern('cmd:book-delete')
  async remove(@Payload() id: string): Promise<Book | null> {
    return await this.#_service.deleteBook(id)
  }
}
