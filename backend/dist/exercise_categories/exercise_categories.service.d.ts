import { UpdateExerciseCategoryDto } from './dto/update-exercise_category.dto';
import { ExerciseCategory } from './entities/exercise_category.entity';
import { Repository } from 'typeorm';
export declare class ExerciseCategoriesService {
    private ExerciseCategoryRepo;
    constructor(ExerciseCategoryRepo: Repository<ExerciseCategory>);
    create(createExerciseCategoryDto: Partial<ExerciseCategory>): Promise<ExerciseCategory>;
    findAll(): Promise<ExerciseCategory[]>;
    findOne(id: string): Promise<ExerciseCategory>;
    update(id: string, updateExerciseCategoryDto: UpdateExerciseCategoryDto): Promise<ExerciseCategory>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
