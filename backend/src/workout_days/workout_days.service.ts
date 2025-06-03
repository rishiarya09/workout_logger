import { Injectable } from '@nestjs/common';
import { CreateWorkoutDayDto } from './dto/create-workout_day.dto';
import { UpdateWorkoutDayDto } from './dto/update-workout_day.dto';

@Injectable()
export class WorkoutDaysService {
  create(createWorkoutDayDto: CreateWorkoutDayDto) {
    return 'This action adds a new workoutDay';
  }

  findAll() {
    return `This action returns all workoutDays`;
  }

  findOne(id: number) {
    return `This action returns a #${id} workoutDay`;
  }

  update(id: number, updateWorkoutDayDto: UpdateWorkoutDayDto) {
    return `This action updates a #${id} workoutDay`;
  }

  remove(id: number) {
    return `This action removes a #${id} workoutDay`;
  }
}
