import { Exercise } from './entities/exercise.entity';
import { Repository } from 'typeorm';
export declare class ExerciseService {
    private excersieRepo;
    constructor(excersieRepo: Repository<Exercise>);
    create(createExerciseDto: Partial<Exercise>): Promise<Exercise>;
    findAll(): Promise<Exercise[]>;
    findOne(id: string): Promise<Exercise>;
    update(id: string, updateExerciseDto: Partial<Exercise>): Promise<Exercise>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
