import { ItemsController } from './items.controller';
import { ItemsService } from './items.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [ItemsController],
  providers: [ItemsService],
})
export class ItemsModule {}
