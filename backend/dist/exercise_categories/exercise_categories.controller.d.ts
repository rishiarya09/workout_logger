import { ExerciseCategoriesService } from './exercise_categories.service';
import { CreateExerciseCategoryDto } from './dto/create-exercise_category.dto';
import { UpdateExerciseCategoryDto } from './dto/update-exercise_category.dto';
export declare class ExerciseCategoriesController {
    private readonly exerciseCategoriesService;
    constructor(exerciseCategoriesService: ExerciseCategoriesService);
    create(createExerciseCategoryDto: CreateExerciseCategoryDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateExerciseCategoryDto: UpdateExerciseCategoryDto): string;
    remove(id: string): string;
}
