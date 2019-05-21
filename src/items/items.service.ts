import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';

@Injectable()
export class ItemsService {
  private readonly items: Item[] = [
    {
      id: 'fsdrgerger',
      name: 'Item 1',
      qty: 100,
      description: 'This is item one',
    },
    {
      id: 'fsdrgerger',
      name: 'Item 2',
      qty: 100,
      description: 'This is item two',
    },
  ];

  findAll(): Item[] {
    return this.items;
  }
}
