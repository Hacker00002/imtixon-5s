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
    host: '127.0.0.1',
    //book-port
    port: 4000,
  }),
)
