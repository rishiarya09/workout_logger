import { ExerciseCategory } from "src/exercise_categories/entities/exercise_category.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('exercises')
export class Exercise {
    @PrimaryGeneratedColumn('uuid') id: string;
    @JoinColumn({name: 'category_id'})
    @ManyToOne(() => ExerciseCategory) category: ExerciseCategory ;
    @Column() description: string;
    @Column() name: string;
    @Column() video_url: string;
    @Column({type: 'date'}) created_at: string;
    @Column({ type: 'date'}) updated_at: string;
}
