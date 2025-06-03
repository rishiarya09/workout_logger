import { Module } from '@nestjs/common';
import { WorkoutSessionService } from './workout-session.service';
import { WorkoutSessionController } from './workout-session.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkoutLog } from 'src/workout-log/entities/workout-log.entity';

@Module({
  imports: [TypeOrmModule.forFeature([WorkoutLog])],
  controllers: [WorkoutSessionController],
  providers: [WorkoutSessionService],
})
export class WorkoutSessionModule {}
