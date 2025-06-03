import { ExerciseCategory } from "src/exercise_categories/entities/exercise_category.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Exercise {
    @PrimaryGeneratedColumn('uuid') id: string;
    @ManyToOne(() => ExerciseCategory) category: ExerciseCategory ;
    @Column() description: string;
    @Column() name: string;
    @Column() videoUrl: string;
    @Column({type: 'date'}) created_at: string;
    @Column({ type: 'date'}) updated_at: string;
}
