import { CreateExerciseCategoryDto } from './dto/create-exercise_category.dto';
import { UpdateExerciseCategoryDto } from './dto/update-exercise_category.dto';
export declare class ExerciseCategoriesService {
    create(createExerciseCategoryDto: CreateExerciseCategoryDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateExerciseCategoryDto: UpdateExerciseCategoryDto): string;
    remove(id: number): string;
}
