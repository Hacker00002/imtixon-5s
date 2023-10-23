import { Module } from '@nestjs/common'
import { PrismaService } from './prisma.service'
//prisma-module
@Module({
  exports: [PrismaService],
  providers: [PrismaService],
})
//export-prisma-module
export class PrismaModule {}
