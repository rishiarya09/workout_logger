import { ExerciseService } from './exercise.service';
import { Exercise } from './entities/exercise.entity';
export declare class ExerciseController {
    private readonly exerciseService;
    constructor(exerciseService: ExerciseService);
    create(createExerciseDto: Exercise): Promise<Exercise>;
    findAll(): Promise<Exercise[]>;
    findOne(id: string): Promise<Exercise>;
    update(id: string, updateExerciseDto: Partial<Exercise>): Promise<Exercise>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
