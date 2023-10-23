import type { MicroserviceOptions } from '@nestjs/microservices'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { appConfig } from './config'
import { ValidationPipe } from '@nestjs/common'
//application
async function bootstrap() {
  //create-microservice-app
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, appConfig)
  //app-use-global
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      stopAtFirstError: true,
    }),
  )
  //app-listen
  await app.listen()
}
bootstrap()
