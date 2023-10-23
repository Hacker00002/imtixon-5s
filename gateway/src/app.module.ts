import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { bookConfig } from './config'
import { BookClientModule } from './client'
import { BookModule } from './module'
//application-module
@Module({
  //imports
  imports: [
    //configuration
    ConfigModule.forRoot({
      isGlobal: true,
      load: [bookConfig],
    }),
    //modules
    BookClientModule,
    BookModule,
  ],
})
//export class app
export class AppModule {}
