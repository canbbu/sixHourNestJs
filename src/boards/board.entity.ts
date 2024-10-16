import { BaseEntity, Column, PrimaryGeneratedColumn, Entity } from 'typeorm';
import { BoardStatus } from './board-status.enum';

@Entity() // 엔터티 데코레이터 추가
export class Board extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({
    type: 'enum',
    enum: BoardStatus,
    default: BoardStatus.PUBLIC,
  })
  status: BoardStatus;
}
