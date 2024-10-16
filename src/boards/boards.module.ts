import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardsController } from './boards.controller';
import { BoardsService } from './boards.service';
import { Board } from './board.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Board])], // Board 엔터티 등록
  controllers: [BoardsController],
  providers: [BoardsService],
})
export class BoardsModule {}
