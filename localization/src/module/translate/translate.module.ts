import { Module } from '@nestjs/common'
import { PrismaService } from '@prisma'
import { TranslateService } from './translate.service'
import { TranslateController } from './translate.controller'

@Module({
  //providers
  providers: [PrismaService, TranslateService],
  //controllers
  controllers: [TranslateController],
})
//export-class-Translate
export class TranslateModule {}
