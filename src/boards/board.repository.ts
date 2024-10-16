import { Injectable, NotFoundException } from '@nestjs/common'; // NotFoundException 임포트
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Board } from './board.entity';
import { BoardStatus } from './board-status.enum';
import { CreateBoardDto } from './create-board.dto';

@Injectable()
export class BoardRepository {
  constructor(
    @InjectRepository(Board)
    private readonly repository: Repository<Board>,
  ) {}

  async createBoard(createBoardDto: CreateBoardDto): Promise<Board> {
    const { title, description } = createBoardDto;

    const board = this.repository.create({
      title,
      description,
      status: BoardStatus.PUBLIC,
    });

    await this.repository.save(board);
    return board;
  }

  async findAllBoards(): Promise<Board[]> {
    return await this.repository.find();
  }

  async findBoardById(id: number): Promise<Board> {
    const found = await this.repository.findOneBy({ id });

    if (!found) {
      throw new NotFoundException(`Board with ID ${id} not found.`);
    }
    return found;
  }

  async deleteBoard(id: number): Promise<void> {
    const result = await this.repository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Board with ID ${id} not found.`);
    }
  }

  async updateBoardStatus(
    id: number,
    status: BoardStatus,
  ): Promise<Board> {
    const board = await this.findBoardById(id);
    board.status = status;
    await this.repository.save(board);
    return board;
  }
}
