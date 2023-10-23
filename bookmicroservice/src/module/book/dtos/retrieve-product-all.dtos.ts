import { IsNotEmpty, IsString, MaxLength } from 'class-validator'
import type { BookRetrieveAllRequest } from '../interface'

export class BookRetrieveAllDto implements BookRetrieveAllRequest {
  @MaxLength(2)
  @IsString()
  @IsNotEmpty()
  language: string
}
