//app-config-options-interface
declare interface AppConfigOptions {
  host: string
  port: number
}
//app-config-options
export const appConfig: AppConfigOptions = {
  //app-port
  host: process.env.APP_HOST ?? '127.0.0.1',
  //app-host
  port: process.env.APP_PORT ? parseInt(process.env.APP_PORT) : 5000,
}
