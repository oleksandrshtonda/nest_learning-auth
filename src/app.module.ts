import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

@Module({
  exports: [],
  controllers: [AppController],
})
export class AppModule {}
