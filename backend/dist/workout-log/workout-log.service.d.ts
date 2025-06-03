import { CreateWorkoutLogDto } from './dto/create-workout-log.dto';
import { UpdateWorkoutLogDto } from './dto/update-workout-log.dto';
export declare class WorkoutLogService {
    create(createWorkoutLogDto: CreateWorkoutLogDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateWorkoutLogDto: UpdateWorkoutLogDto): string;
    remove(id: number): string;
}
