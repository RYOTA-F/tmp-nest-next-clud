import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { ApiProperty } from '@nestjs/swagger'

@Entity()
export class Todo {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number

  @Column()
  @ApiProperty()
  name: string

  @Column()
  @ApiProperty()
  description: string

  @Column({ default: () => 'now()' })
  @ApiProperty()
  startDate: Date

  @Column({ default: () => 'now()' })
  @ApiProperty()
  endDate: Date

  @Column()
  @ApiProperty()
  isDone: boolean
}
