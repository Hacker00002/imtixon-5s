import type { OnModuleInit, OnModuleDestroy } from '@nestjs/common'
import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { ClientProxy, ClientTCP } from '@nestjs/microservices'
import { firstValueFrom } from 'rxjs'
import { Cmd } from './enums'
import type { BookRetrieveAllResponse, BookRetrieveAllRequest, CreateBookRequest, UpdateBookInterface } from './interface'

@Injectable()
export class BookClientService implements OnModuleInit, OnModuleDestroy {
  //readonly-client
  readonly #_client: ClientProxy
  //constructor-service
  constructor(config: ConfigService) {
    this.#_client = new ClientTCP({
      host: config.getOrThrow<string>('book.host'),
      port: config.getOrThrow<number>('book.port'),
    })
  }
  //all-book
  reatrieveBook(payload: BookRetrieveAllRequest): Promise<BookRetrieveAllResponse[]> {
    return this.#_request<BookRetrieveAllRequest, BookRetrieveAllResponse[]>(Cmd.BOOK_RETRIEVE, payload)
  }
  //book-get-one
  async getOneBook(id: string) {
    return await this.#_request(Cmd.BOOK_ONE, id)
  }
  //create-book
  async createBook(body: CreateBookRequest) {
    return this.#_request(Cmd.BOOK_CREATE, body)
  }
  //create-book
  async deleteBook(id: string): Promise<null> {
    return this.#_request(Cmd.BOOK_DELETE, id)
  }
  //update-book
  async updateBook(id: string, body: UpdateBookInterface) {
    await this.#_request(Cmd.BOOK_UPDATE, { id, ...body })
  }
  //on-module-init
  async onModuleInit() {
    await this.#_client.connect()
  }
  //on-module-destroy
  async onModuleDestroy() {
    await this.#_client.close()
  }
  //service
  async #_request<TRequest = any, TResponse = any>(subject: string, payload: TRequest): Promise<TResponse> {
    return await firstValueFrom(this.#_client.send<TResponse, TRequest>(subject, payload))
  }
}
