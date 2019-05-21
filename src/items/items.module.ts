import { ItemSchema } from './schemas/item.schema';
import { ItemsController } from './items.controller';
import { ItemsService } from './items.service';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'item', schema: ItemSchema }])],
  controllers: [ItemsController],
  providers: [ItemsService],
})
export class ItemsModule {}
