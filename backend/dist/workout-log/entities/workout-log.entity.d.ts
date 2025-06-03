import { Exercise } from "src/exercise/entities/exercise.entity";
import { WorkoutSession } from "src/workout-session/entities/workout-session.entity";
export declare class WorkoutLog {
    id: string;
    session: WorkoutSession;
    exercise: Exercise;
    set_number: number;
    reps: number;
    weight: number;
    created_at: string;
    updated_at: string;
}
