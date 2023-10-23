import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

async function bootstrap() {
  //application
  const app = await NestFactory.create(AppModule)
  //create-swagger-api
  const options = new DocumentBuilder().setTitle('Book shop online store').setDescription('in this book shop people giv book ....').setVersion('1.0').build()
  //create-documentation
  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup('api', app, document)
  //port
  await app.listen(5000)
}
bootstrap()
