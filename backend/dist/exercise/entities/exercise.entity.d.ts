import { ExerciseCategory } from "src/exercise_categories/entities/exercise_category.entity";
export declare class Exercise {
    id: string;
    category: ExerciseCategory;
    description: string;
    name: string;
    video_url: string;
    created_at: string;
    updated_at: string;
}
