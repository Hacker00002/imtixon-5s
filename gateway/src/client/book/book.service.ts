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
  //create-book
  createBook(payload: CreateBookRequest): Promise<null> {
    return this.#_request<CreateBookRequest, null>(Cmd.BOOK_CREATE, payload)
  }
  //create-book
  deleteBook(id: string): Promise<null> {
    return this.#_request<any, null>(Cmd.BOOK_DELETE, id)
  }
  //update-book
  updateBook(payload: UpdateBookInterface): Promise<void> {
    return this.#_request<UpdateBookInterface, null>(Cmd.BOOK_UPDATE, payload)
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
