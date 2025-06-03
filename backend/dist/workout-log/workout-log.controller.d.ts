import { WorkoutLogService } from './workout-log.service';
import { CreateWorkoutLogDto } from './dto/create-workout-log.dto';
import { UpdateWorkoutLogDto } from './dto/update-workout-log.dto';
export declare class WorkoutLogController {
    private readonly workoutLogService;
    constructor(workoutLogService: WorkoutLogService);
    create(createWorkoutLogDto: CreateWorkoutLogDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateWorkoutLogDto: UpdateWorkoutLogDto): string;
    remove(id: string): string;
}
