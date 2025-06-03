import { CreateWorkoutSessionDto } from './dto/create-workout-session.dto';
import { UpdateWorkoutSessionDto } from './dto/update-workout-session.dto';
export declare class WorkoutSessionService {
    create(createWorkoutSessionDto: CreateWorkoutSessionDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateWorkoutSessionDto: UpdateWorkoutSessionDto): string;
    remove(id: number): string;
}
