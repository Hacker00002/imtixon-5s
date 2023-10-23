import { Module } from '@nestjs/common'
import { PrismaService } from '@prisma'
import { LanguageService } from './language.service'
import { LanguageController } from './language.controller'
//module-language
@Module({
  //providers
  providers: [PrismaService, LanguageService],
  //controllers
  controllers: [LanguageController],
})
//export-language-model
export class LanguageModule {}
