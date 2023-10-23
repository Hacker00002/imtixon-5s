import { Transport } from '@nestjs/microservices'
//app-config-options
declare interface AppConfigOptions {
  transport: Transport.TCP
  options: {
    host: string
    port: number
  }
}
//application
export const appConfig: AppConfigOptions = {
  transport: Transport.TCP,
  options: {
    host: process.env.APP_HOST ?? '127.0.0.1',
    port: process.env.APP_PORT ? parseInt(process.env.APP_PORT) : 4000,
  },
}
