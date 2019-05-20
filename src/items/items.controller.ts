import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('items')
export class ItemsController {
  @Get()
  findAll(): string {
    return 'Get All Items';
  }

  @Post()
  create(): string {
    return 'Create item';
  }
}
