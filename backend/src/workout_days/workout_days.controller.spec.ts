import { Test, TestingModule } from '@nestjs/testing';
import { WorkoutDaysController } from './workout_days.controller';
import { WorkoutDaysService } from './workout_days.service';

describe('WorkoutDaysController', () => {
  let controller: WorkoutDaysController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WorkoutDaysController],
      providers: [WorkoutDaysService],
    }).compile();

    controller = module.get<WorkoutDaysController>(WorkoutDaysController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
