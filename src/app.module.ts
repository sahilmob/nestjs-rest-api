import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsModule } from './items/items.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import keys from './config/keys';

@Module({
  imports: [ItemsModule, MongooseModule.forRoot(keys.mongoURI)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
