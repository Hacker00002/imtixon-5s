import { Module } from '@nestjs/common'
import { BookClientService } from './book.service'
//book-client-service
@Module({
  //exports
  exports: [BookClientService],
  //providers
  providers: [BookClientService],
})
//export class BookClient
export class BookClientModule {}
