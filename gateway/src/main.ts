import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

async function bootstrap() {
  //application
  const app = await NestFactory.create(AppModule)
  //create-swagger-api
  const options = new DocumentBuilder().setTitle('Items API').setDescription('API for managing items').setVersion('1.0').build()
  //create-documentation
  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup('api', app, document)
  //port
  await app.listen(process.env.APP_PORT ?? 5000)
}
bootstrap()
