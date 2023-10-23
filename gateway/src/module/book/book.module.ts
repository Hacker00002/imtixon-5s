import { Module } from '@nestjs/common'
import { BookClientService } from '../../client'
import { BookController } from './book.controlller'
//book-module
@Module({
  //provides
  providers: [BookClientService],
  //controllers
  controllers: [BookController],
})
//export class Book
export class BookModule {}
