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
    const name = createExerciseDto.name;
    const existing = await this.excersieRepo.findOne({where: {name}});

    if(existing) return existing;

    const exercise = this.excersieRepo.create(createExerciseDto);
    const saved = await this.excersieRepo.save(exercise);
    return this. excersieRepo.findOne({
      where: {id: saved.id},
      relations: [`category`]
    })
  }

  async findAll(): Promise<Exercise[]> {
    return this.excersieRepo.find({relations: ['category'],});
  }

  async findOne(id: string): Promise<Exercise> {
    return this.excersieRepo.findOne({where: {id},
    relations: ['category']});
  }

  async update(id: string, updateExerciseDto: Partial<Exercise>) {
    const updatedexercise = this.excersieRepo.update(id, updateExerciseDto);
    return this.excersieRepo.findOne({where : {id}});
  }

  async remove(id: string) {
    return this.excersieRepo.delete(id);
  }
}
