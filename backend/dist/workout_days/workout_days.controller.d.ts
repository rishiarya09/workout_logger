import { WorkoutDaysService } from './workout_days.service';
import { CreateWorkoutDayDto } from './dto/create-workout_day.dto';
import { UpdateWorkoutDayDto } from './dto/update-workout_day.dto';
export declare class WorkoutDaysController {
    private readonly workoutDaysService;
    constructor(workoutDaysService: WorkoutDaysService);
    create(createWorkoutDayDto: CreateWorkoutDayDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateWorkoutDayDto: UpdateWorkoutDayDto): string;
    remove(id: string): string;
}
