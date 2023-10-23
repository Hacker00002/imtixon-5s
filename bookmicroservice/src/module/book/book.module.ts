import { Module } from '@nestjs/common'
import { BookService } from './book.service'
import { BookController } from './book.controller'
import { PrismaService } from '../../prisma'
import { LocalizationModule } from '../../client'
//book-module
@Module({
  //imports
  imports: [LocalizationModule],
  //providers
  providers: [PrismaService, BookService],
  //controllers
  controllers: [BookController],
})
//book-module-export
export class BookModule {}
