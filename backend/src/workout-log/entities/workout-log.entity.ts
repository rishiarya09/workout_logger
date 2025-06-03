import { Exercise } from "src/exercise/entities/exercise.entity";
import { User } from "src/user/entities/user.entity";
import { WorkoutSession } from "src/workout-session/entities/workout-session.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('exercise_sets')
export class WorkoutLog {

    @PrimaryGeneratedColumn('uuid') id: string;
    @ManyToOne(() => WorkoutSession) 
    @JoinColumn({name: 'workout_session_id'})
    session: WorkoutSession;
    @ManyToOne(() => Exercise) exercise: Exercise;
    @Column() set_number: number;
    @Column() reps: number;
    @Column() weight: number;
    @Column({type: 'date'}) created_at: string;
    @Column({ type: 'date'}) updated_at: string;
}
