import { IsString, IsNotEmpty } from 'class-validator'
import type { CreateBookRequestInterface } from '../interface'

export class CreateBookDto implements CreateBookRequestInterface {
  @IsString()
  @IsNotEmpty()
  book_name: string

  @IsString()
  @IsNotEmpty()
  book_price: string

  @IsString()
  @IsNotEmpty()
  book_picture: string

  @IsString()
  @IsNotEmpty()
  book_description: string
}
