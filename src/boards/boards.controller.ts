import { Body, Controller, Get, Post } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board } from './boards.model';

@Controller('boards')
export class BoardsController {

    constructor(private readonly serviceBoards : BoardsService){}

    @Get()
    getAllBoards() : Board[]{
        return this.serviceBoards.getAllBoards();
    }
    @Post()
    createBoard(@Body() body: { title: string, description: string }) : Board {
        const { title, description } = body; // Body에서 title과 description 추출
        console.log("title : "+ title + "description : " + description)
        return this.serviceBoards.createBoard(title, description);
    }
}
