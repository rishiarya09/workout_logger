import { WorkoutPlan } from "src/workout_plans/entities/workout_plan.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('workout_days')
export class WorkoutDay {
    @PrimaryGeneratedColumn('uuid') id: string;
    @ManyToOne(() => WorkoutPlan) workout_plan_id: WorkoutPlan;
    @Column() name: string;
    @Column() day_number: number;
    @Column({type: 'date'}) created_at: string;
    @Column({ type: 'date'}) updated_at: string;
}
