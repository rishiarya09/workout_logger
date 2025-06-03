import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ExerciseCategoriesService } from './exercise_categories.service';
import { CreateExerciseCategoryDto } from './dto/create-exercise_category.dto';
import { UpdateExerciseCategoryDto } from './dto/update-exercise_category.dto';

@Controller('exercise-categories')
export class ExerciseCategoriesController {
  constructor(private readonly exerciseCategoriesService: ExerciseCategoriesService) {}

  @Post()
  create(@Body() createExerciseCategoryDto: CreateExerciseCategoryDto) {
    return this.exerciseCategoriesService.create(createExerciseCategoryDto);
  }

  @Get()
  findAll() {
    return this.exerciseCategoriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.exerciseCategoriesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateExerciseCategoryDto: UpdateExerciseCategoryDto) {
    return this.exerciseCategoriesService.update(+id, updateExerciseCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.exerciseCategoriesService.remove(+id);
  }
}
