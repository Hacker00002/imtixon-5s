import { registerAs } from '@nestjs/config'
//localization-service-interface
export declare interface LocalizationServiceOptions {
  baseUrl?: string
  timeout?: number
}
//localization-service-options
export const localizationConfig = registerAs<LocalizationServiceOptions>(
  'localization',
  (): LocalizationServiceOptions => ({
    //localization-service-url
    baseUrl: process.env.LOCALIZATION_SERVICE_BASE_URL ?? 'http://127.0.0.1:4001/translate',
    //localization-service-timeout
    timeout: process.env.LOCALIZATION_SERVICE_TIMEOUT ? parseInt(process.env.LOCALIZATION_SERVICE_TIMEOUT) : 5000,
  }),
)
