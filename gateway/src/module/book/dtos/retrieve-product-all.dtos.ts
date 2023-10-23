import { IsNotEmpty, IsString, MaxLength } from 'class-validator'

export class BookRetrieveAllDto {
  @MaxLength(2)
  @IsString()
  @IsNotEmpty()
  language: string
}
