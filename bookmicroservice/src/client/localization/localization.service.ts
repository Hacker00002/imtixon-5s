import type { AxiosInstance } from 'axios'
import axios from 'axios'
import { Injectable, InternalServerErrorException } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import type { RetrieveTranslateRequest, RetrieveTranslateResponse } from './interfaces'

@Injectable()
//localization-service
export class LocalizationService {
  readonly #_axios: AxiosInstance
  //config0service
  constructor(config: ConfigService) {
    this.#_axios = axios.create({
      baseURL: config.getOrThrow<string>('localization.baseUrl'),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      validateStatus: (status) => status > 199 && status < 400,
      timeout: config.getOrThrow<number>('localization.timeout'),
    })
  }
  //reatrieve-translate
  async retrieveTranslate(payload: RetrieveTranslateRequest): Promise<RetrieveTranslateResponse> {
    try {
      const { data } = await this.#_axios.request<RetrieveTranslateResponse>({
        method: 'GET',
        url: '/',
        headers: {
          'Accept-Language': payload.language,
        },
        data: {
          code: payload.code,
        },
      })

      return {
        value: data.value,
      }
    } catch (error: unknown) {
      throw new InternalServerErrorException('Internal server error')
    }
  }
}
