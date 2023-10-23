import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { PrismaModule } from '@prisma'
import { LanguageModule, TranslateModule } from '@module'
import { databaseConfig } from '@config'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [databaseConfig],
    }),
    PrismaModule,
    LanguageModule,
    TranslateModule,
  ],
})
export class AppModule {}
