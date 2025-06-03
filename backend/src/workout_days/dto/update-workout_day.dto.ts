import { PartialType } from '@nestjs/mapped-types';
import { CreateWorkoutDayDto } from './create-workout_day.dto';

export class UpdateWorkoutDayDto extends PartialType(CreateWorkoutDayDto) {}
