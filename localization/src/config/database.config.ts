import { registerAs } from '@nestjs/config'

declare interface DatabaseConfigOptions {
  url: string
}

export const databaseConfig = registerAs<DatabaseConfigOptions>(
  'database',
  (): DatabaseConfigOptions => ({
    url: process.env.DATABASE_URL ?? 'postgresql://postgres:123@127.0.0.1:5432/bookmarket',
  }),
)
