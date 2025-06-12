import { ExerciseCategoriesService } from './exercise_categories.service';
import { CreateExerciseCategoryDto } from './dto/create-exercise_category.dto';
import { UpdateExerciseCategoryDto } from './dto/update-exercise_category.dto';
export declare class ExerciseCategoriesController {
    private readonly exerciseCategoriesService;
    constructor(exerciseCategoriesService: ExerciseCategoriesService);
    create(createExerciseCategoryDto: CreateExerciseCategoryDto): Promise<{
        message: string;
        data: {};
    }>;
    findAll(): Promise<import("./entities/exercise_category.entity").ExerciseCategory[]>;
    findOne(id: string): Promise<import("./entities/exercise_category.entity").ExerciseCategory>;
    update(id: string, updateExerciseCategoryDto: UpdateExerciseCategoryDto): Promise<import("./entities/exercise_category.entity").ExerciseCategory>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
