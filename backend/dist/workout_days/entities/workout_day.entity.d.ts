import { WorkoutPlan } from "src/workout_plans/entities/workout_plan.entity";
export declare class WorkoutDay {
    id: string;
    workout_plan_id: WorkoutPlan;
    name: string;
    day_number: number;
    created_at: string;
    updated_at: string;
}
