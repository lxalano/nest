import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiProperty, ApiTags } from '@nestjs/swagger';

//定义数据类型
class CretePostDto {
    @ApiProperty({ description: '帖子标题' })
    title: string
    @ApiProperty({ description: '帖子内容' })
    content: string
}

@Controller('posts')
@ApiTags('帖子')
export class PostsController {

    @Get()
    @ApiOperation({ summary: '显示列表' })
    index() {
        return []
    }

    @Post()
    @ApiOperation({ summary: '创建帖子' })
    create(@Body() body: CretePostDto) {
        return body
    }

    @Get(':id')
    @ApiOperation({ summary: '帖子详情' })
    detail(@Param('id') id: string) {
        return {
            id: id,
            title: '标题',
        }
    }

    @Put(':id')
    @ApiOperation({ summary: '修改帖子' })
    update(@Param('id') id: string, @Body() body: CretePostDto) {
        return {
            succes: true
        }
    }
    @Delete(':id')
    @ApiOperation({ summary: '删除帖子' })
    remove(@Param('id') id: string) {
        return {
            seccess: true
        }
    }



}
