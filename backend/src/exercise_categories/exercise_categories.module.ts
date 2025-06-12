import { Module } from '@nestjs/common';
import { ExerciseCategoriesService } from './exercise_categories.service';
import { ExerciseCategoriesController } from './exercise_categories.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExerciseCategory } from './entities/exercise_category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ExerciseCategory])],
  controllers: [ExerciseCategoriesController],
  providers: [ExerciseCategoriesService],
})
export class ExerciseCategoriesModule {}
