import { CreateWorkoutPlanDto } from './dto/create-workout_plan.dto';
import { UpdateWorkoutPlanDto } from './dto/update-workout_plan.dto';
export declare class WorkoutPlansService {
    create(createWorkoutPlanDto: CreateWorkoutPlanDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateWorkoutPlanDto: UpdateWorkoutPlanDto): string;
    remove(id: number): string;
}
