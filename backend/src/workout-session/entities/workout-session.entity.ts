import { User } from "src/user/entities/user.entity";
import { WorkoutLog } from "src/workout-log/entities/workout-log.entity";
import { WorkoutDay } from "src/workout_days/entities/workout_day.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('workout_sessions')
export class WorkoutSession {
    @PrimaryGeneratedColumn('uuid') id:string;
    @ManyToOne(() => User) user: User;
    @ManyToOne(() => WorkoutDay) workout_day: WorkoutDay;
    @OneToMany(() => WorkoutLog, (log) => log.session)
    logs: WorkoutLog[];
    @Column({type: 'date'}) session_date: string;
    @Column({type: 'date'}) created_at: string;
    @Column({ type: 'date'}) updated_at: string; 
}
