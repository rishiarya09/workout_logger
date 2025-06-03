import { CreateWorkoutDayDto } from './dto/create-workout_day.dto';
import { UpdateWorkoutDayDto } from './dto/update-workout_day.dto';
export declare class WorkoutDaysService {
    create(createWorkoutDayDto: CreateWorkoutDayDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateWorkoutDayDto: UpdateWorkoutDayDto): string;
    remove(id: number): string;
}
