import { registerAs } from '@nestjs/config'
//book-config-options-interface
declare interface BookConfigOptions {
  host: string
  port: number
}
//book-config
export const bookConfig = registerAs<BookConfigOptions>(
  'book',
  (): BookConfigOptions => ({
    //book-host
    host: process.env.BOOK_HOST ?? '127.0.0.1',
    //book-port
    port: process.env.BOOK_PORT ? parseInt(process.env.PRODUCT_PORT) : 4000,
  }),
)
