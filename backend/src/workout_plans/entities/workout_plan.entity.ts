import { User } from "src/user/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('workout_plans')
export class WorkoutPlan {
    @PrimaryGeneratedColumn('uuid') id: string;
    @ManyToOne(() => User) user: User;
    @Column() name: string;
    @Column() description: string;
    @Column({type: 'date'}) created_by: string;
    @Column({ type: 'date'}) updated_by: string;ß
}
