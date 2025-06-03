import { Module } from '@nestjs/common';
import { ExerciseCategoriesService } from './exercise_categories.service';
import { ExerciseCategoriesController } from './exercise_categories.controller';

@Module({
  controllers: [ExerciseCategoriesController],
  providers: [ExerciseCategoriesService],
})
export class ExerciseCategoriesModule {}
