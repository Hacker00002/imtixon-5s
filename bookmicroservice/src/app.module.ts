import { databaseConfig, localizationConfig } from './config'
import { BookModule } from './module'
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
//app-module
@Module({
  //imports
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [databaseConfig, localizationConfig],
    }),
    //modules
    BookModule,
  ],
})
// export-app-module
export class AppModule {}
