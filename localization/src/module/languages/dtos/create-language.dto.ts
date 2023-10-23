import { IsString, IsNotEmpty, MaxLength } from 'class-validator'
import { CreateLanguageRequestInterface } from '../interface'

export class CreateLanguageDto implements CreateLanguageRequestInterface{
  @MaxLength(2)
  @IsString()
  @IsNotEmpty()
  language_code: string

  @MaxLength(64)
  @IsString()
  @IsNotEmpty()
  language_title: string
}
