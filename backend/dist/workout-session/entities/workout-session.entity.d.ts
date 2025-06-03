import { User } from "src/user/entities/user.entity";
import { WorkoutLog } from "src/workout-log/entities/workout-log.entity";
import { WorkoutDay } from "src/workout_days/entities/workout_day.entity";
export declare class WorkoutSession {
    id: string;
    user: User;
    workout_day: WorkoutDay;
    logs: WorkoutLog[];
    session_date: string;
    created_at: string;
    updated_at: string;
}
