import { WorkoutSessionService } from './workout-session.service';
import { CreateWorkoutSessionDto } from './dto/create-workout-session.dto';
import { UpdateWorkoutSessionDto } from './dto/update-workout-session.dto';
export declare class WorkoutSessionController {
    private readonly workoutSessionService;
    constructor(workoutSessionService: WorkoutSessionService);
    create(createWorkoutSessionDto: CreateWorkoutSessionDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateWorkoutSessionDto: UpdateWorkoutSessionDto): string;
    remove(id: string): string;
}
