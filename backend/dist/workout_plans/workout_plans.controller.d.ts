import { WorkoutPlansService } from './workout_plans.service';
import { CreateWorkoutPlanDto } from './dto/create-workout_plan.dto';
import { UpdateWorkoutPlanDto } from './dto/update-workout_plan.dto';
export declare class WorkoutPlansController {
    private readonly workoutPlansService;
    constructor(workoutPlansService: WorkoutPlansService);
    create(createWorkoutPlanDto: CreateWorkoutPlanDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateWorkoutPlanDto: UpdateWorkoutPlanDto): string;
    remove(id: string): string;
}
