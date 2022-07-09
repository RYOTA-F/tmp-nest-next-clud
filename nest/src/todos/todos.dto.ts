import { IsString, IsNotEmpty, MaxLength, IsDateString } from 'class-validator'

export class CreateTodoDTO {
  @IsString()
  @IsNotEmpty()
  @MaxLength(30)
  name: string

  @IsString()
  @IsNotEmpty()
  @MaxLength(60)
  description: string

  @IsDateString()
  startDate: Date

  @IsDateString()
  endDate: Date
}
