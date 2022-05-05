import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryModule } from './category/category.module';
import { LoggerModule } from './utils/logger/logger.module';
@Module({
  //Static glob paths (e.g., dist/**/*.entity{ .ts,.js}) won't work properly with webpack.
  imports: [TypeOrmModule.forRoot(), LoggerModule, CategoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
