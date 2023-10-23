import { registerAs } from '@nestjs/config'
//database-config-options
declare interface DatabaseConfigOptions {
  url: string
}
//database-config
export const databaseConfig = registerAs<DatabaseConfigOptions>(
  'database',
  (): DatabaseConfigOptions => ({
    //database-url
    url: process.env.DATABASE_URL ?? 'postgresql://postgres:123@127.0.0.1:5432/bookmarketservice',
  }),
)
