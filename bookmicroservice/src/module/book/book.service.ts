import type { Book } from '@prisma/client'
import { Injectable } from '@nestjs/common'
import { PrismaService } from '../../prisma'
import { LocalizationService } from '../../client'
import { NotFoundException } from '@nestjs/common'
import type { CreateBookRequestInterface, BookRetrieveAllRequest, UpdateBookInterface } from './interface'
import type { RetrieveTranslateRequest, RetrieveTranslateResponse } from '../../client'

@Injectable()
export class BookService {
  //readonly-prisma
  readonly #_prisma: PrismaService
  //readonly-localization
  readonly #_localization: LocalizationService
  //constructor
  constructor(prisma: PrismaService, localization: LocalizationService) {
    this.#_prisma = prisma
    this.#_localization = localization
  }
  //retrieve-all-books
  async retrieveBookAll(payload: BookRetrieveAllRequest): Promise<Book[]> {
    const booklist = await this.#_prisma.book.findMany()
    //results
    const result = []
    //get-book-list
    for (const book of booklist) {
      const name = await this.#_retrieveTranslate({ code: book.book_name, language: payload.language })
      const description = await this.#_retrieveTranslate({ code: book.book_description, language: payload.language })

      result.push({
        id: book.id,
        book_name: name.value,
        book_price: book.book_price,
        book_picture: book.book_picture,
        book_description: description.value,
      })
    }

    return result
  }
  //create-new-book
  async createBook(payload: CreateBookRequestInterface): Promise<null> {
    await this.#_prisma.book.create({
      data: {
        book_name: payload.book_name,
        book_price: payload.book_price,
        book_picture: payload.book_picture,
        book_description: payload.book_description,
      },
    })

    return null
  }
  //get-one-book
  async getOneBook(id: string) {
    const book = await this.#_prisma.book.findFirst({ where: { id } })
    // check-book)
    if (!book) {
      throw new NotFoundException(`${book.book_name} not found`)
    }
    return book
  }
  //update-book
  async updateBook(payload: UpdateBookInterface) {
    const book = await this.#_prisma.book.findFirst({
      where: { id: payload.id },
    })
    //check-book
    if (!book) {
      throw new NotFoundException(`${book.book_name} not found`)
    }
    //update
    await this.#_prisma.book.update({
      where: { id: payload.id },
      data: {
        book_name: payload.book_name,
        book_price: payload.book_price,
        book_picture: payload.book_picture,
        book_description: payload.book_description,
      },
    })
  }
  //delete-book
  async deleteBook(id: string) {
    const book = await this.#_prisma.book.findFirst({
      where: { id },
    })
    //check-book
    if (!book) {
      throw new NotFoundException(`${book.book_name} not found`)
    }
    await this.#_prisma.book.delete({ where: { id } })
    //return
    return null
  }
  //reatrive-translate
  async #_retrieveTranslate(payload: RetrieveTranslateRequest): Promise<RetrieveTranslateResponse> {
    const translate = await this.#_localization
      .retrieveTranslate({
        code: payload.code,
        language: payload.language,
      })
      .catch((): undefined => undefined)

    if (!translate) {
      return {
        value: payload.code,
      }
    }

    return {
      value: translate.value,
    }
  }
}
