import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
  //create-application
  const app = await NestFactory.create(AppModule)
  //app-global-api-route
  app.setGlobalPrefix('api/v1/')
  //aaplication-starter
  await app.listen(process.env.APP_PORT ?? 5000)
}
//call-bootstrap-function
bootstrap()
