import { Injectable } from '@nestjs/common';
import { CreateExerciseCategoryDto } from './dto/create-exercise_category.dto';
import { UpdateExerciseCategoryDto } from './dto/update-exercise_category.dto';
import { ExerciseCategory } from './entities/exercise_category.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
@Injectable()
export class ExerciseCategoriesService {

  constructor(
    @InjectRepository(ExerciseCategory) private ExerciseCategoryRepo: Repository<ExerciseCategory>
  ) {
  }

  async create(createExerciseCategoryDto: Partial<ExerciseCategory>) {
    const name = createExerciseCategoryDto.name
    const exisiting = await this.ExerciseCategoryRepo.findOne({where: {name}});
    if(exisiting) return exisiting;

    const exercise = this.ExerciseCategoryRepo.create(createExerciseCategoryDto);
   const saved = await this.ExerciseCategoryRepo.save(exercise);
    return saved;
  }

  findAll(): Promise<ExerciseCategory[]> {
    return this.ExerciseCategoryRepo.find()
  }

  findOne(id: string) {
    return this.ExerciseCategoryRepo.findOne({where: {id}});
  }

  async update(id: string, updateExerciseCategoryDto: UpdateExerciseCategoryDto) {
    const updatedexercise = this.ExerciseCategoryRepo.update(id, updateExerciseCategoryDto);
    return this.ExerciseCategoryRepo.findOne({where: {id}});
  }

  async remove(id: string) {
    return this.ExerciseCategoryRepo.delete(id);
  }
}
