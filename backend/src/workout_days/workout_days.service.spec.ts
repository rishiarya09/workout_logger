import { Test, TestingModule } from '@nestjs/testing';
import { WorkoutDaysService } from './workout_days.service';

describe('WorkoutDaysService', () => {
  let service: WorkoutDaysService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WorkoutDaysService],
    }).compile();

    service = module.get<WorkoutDaysService>(WorkoutDaysService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
