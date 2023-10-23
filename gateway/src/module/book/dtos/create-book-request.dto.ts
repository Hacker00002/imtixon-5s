import { IsString, IsNotEmpty } from 'class-validator'

export class CreateBookDto {
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
