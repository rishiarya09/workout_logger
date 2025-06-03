import { Injectable } from '@nestjs/common';
import { CreateExerciseDto } from './dto/create-exercise.dto';
import { UpdateExerciseDto } from './dto/update-exercise.dto';
import { Exercise } from './entities/exercise.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ExerciseService {
  constructor(
    @InjectRepository(Exercise)
    private excersieRepo: Repository<Exercise>
  ) {}
  async create(createExerciseDto: Partial<Exercise>) {
    const exercise = this.excersieRepo.create(createExerciseDto);
    return this.excersieRepo.save(exercise);
  }

  async findAll(): Promise<Exercise[]> {
    return this.excersieRepo.find();
  }

  async findOne(id: string): Promise<Exercise> {
    return this.excersieRepo.findOne({where: {id}});
  }

  async update(id: string, updateExerciseDto: Partial<Exercise>) {
    const updatedexercise = this.excersieRepo.update(id, updateExerciseDto);
    return this.excersieRepo.findOne({where : {id}});
  }

  async remove(id: string) {
    return this.excersieRepo.delete(id);
  }
}
