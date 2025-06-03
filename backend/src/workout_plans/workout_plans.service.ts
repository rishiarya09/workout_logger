import { Injectable } from '@nestjs/common';
import { CreateWorkoutPlanDto } from './dto/create-workout_plan.dto';
import { UpdateWorkoutPlanDto } from './dto/update-workout_plan.dto';

@Injectable()
export class WorkoutPlansService {
  create(createWorkoutPlanDto: CreateWorkoutPlanDto) {
    return 'This action adds a new workoutPlan';
  }

  findAll() {
    return `This action returns all workoutPlans`;
  }

  findOne(id: number) {
    return `This action returns a #${id} workoutPlan`;
  }

  update(id: number, updateWorkoutPlanDto: UpdateWorkoutPlanDto) {
    return `This action updates a #${id} workoutPlan`;
  }

  remove(id: number) {
    return `This action removes a #${id} workoutPlan`;
  }
}
