import { PartialType } from '@nestjs/mapped-types';
import { CreateExerciseCategoryDto } from './create-exercise_category.dto';

export class UpdateExerciseCategoryDto extends PartialType(CreateExerciseCategoryDto) {}
