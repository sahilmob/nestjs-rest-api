import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';

import { CreateItemDto } from './dto/create-item.dto';

@Controller('items')
export class ItemsController {
  @Get()
  findAll(): string {
    return 'Get All Items';
  }

  @Post()
  create(@Body() createItemDto: CreateItemDto): string {
    return `Name: ${createItemDto.name} Desc: ${
      createItemDto.description
    } QTY: ${createItemDto.qty}`;
  }
}
