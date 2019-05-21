import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';

@Injectable()
export class ItemsService {
  private readonly items: Item[] = [
    {
      id: '1',
      name: 'Item 1',
      qty: 100,
      description: 'This is item one',
    },
    {
      id: '2',
      name: 'Item 2',
      qty: 100,
      description: 'This is item two',
    },
  ];

  findAll(): Item[] {
    return this.items;
  }

  findOne(id: string): Item {
    return this.items.find(item => item.id === id);
  }
}
