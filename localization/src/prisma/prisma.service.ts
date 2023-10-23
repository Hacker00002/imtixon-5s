import type { OnModuleInit, OnModuleDestroy } from '@nestjs/common'
import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { PrismaClient } from '@prisma/client'

@Injectable()
//prisma-service
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  constructor(config: ConfigService) {
    super({
      datasources: {
        db: {
          url: config.getOrThrow<string>('database.url'),
        },
      },
    })
  }
  //on-module-init
  onModuleInit() {
    this.$connect()
  }
  //on-module-destroy
  onModuleDestroy() {
    this.$disconnect()
  }
}
