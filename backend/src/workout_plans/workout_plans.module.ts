import { Module } from '@nestjs/common';
import { WorkoutPlansService } from './workout_plans.service';
import { WorkoutPlansController } from './workout_plans.controller';

@Module({
  controllers: [WorkoutPlansController],
  providers: [WorkoutPlansService],
})
export class WorkoutPlansModule {}
