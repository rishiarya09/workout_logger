import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('exercise_categories')
export class ExerciseCategory {
    @PrimaryGeneratedColumn('uuid') id: string;
    @Column() name: string;
    @Column() description: string;
    @Column({ type: 'date' }) created_at: string;
    @Column({ type: 'date' }) updated_at: string;
}
