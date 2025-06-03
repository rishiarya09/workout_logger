import { Module } from '@nestjs/common';
import { WorkoutLogService } from './workout-log.service';
import { WorkoutLogController } from './workout-log.controller';

@Module({
  controllers: [WorkoutLogController],
  providers: [WorkoutLogService],
})
export class WorkoutLogModule {}
