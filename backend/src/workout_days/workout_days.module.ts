import { Module } from '@nestjs/common';
import { WorkoutDaysService } from './workout_days.service';
import { WorkoutDaysController } from './workout_days.controller';

@Module({
  controllers: [WorkoutDaysController],
  providers: [WorkoutDaysService],
})
export class WorkoutDaysModule {}
