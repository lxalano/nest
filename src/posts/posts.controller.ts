import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';


@Controller('posts')
@ApiTags('帖子')
export class PostsController {

    @Get()
    @ApiOperation({ summary: '请求文章' })
    index() {
        return []
    }
    @Post()
    @ApiOperation({ summary: '写入文章' })
    create(@Body() body) {
        return {
            suucess: true
        }
    }
    @Get(':id')
    detail() {
        return {
            id: 1,
            title: '标题',
        }
    }

}
