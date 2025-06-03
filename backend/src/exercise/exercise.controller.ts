import { Controller, Get, Post, Body, Put, Param, Delete, NotFoundException } from '@nestjs/common';
import { ExerciseService } from './exercise.service';
import { CreateExerciseDto } from './dto/create-exercise.dto';
import { UpdateExerciseDto } from './dto/update-exercise.dto';
import { Exercise } from './entities/exercise.entity';

@Controller('exercise')
export class ExerciseController {
  constructor(private readonly exerciseService: ExerciseService) {}

  @Post()
  async create(@Body() createExerciseDto: Exercise): Promise<Exercise> {
    return this.exerciseService.create(createExerciseDto);
  }

  @Get()
  async findAll(): Promise<Exercise[]> {
    return this.exerciseService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Exercise> {
    const exercise = this.exerciseService.findOne(id);
    if(!exercise) {
      throw new NotFoundException("Exercise not found");
    } else {
      return exercise;
    }
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateExerciseDto: Partial<Exercise>) {
    return this.exerciseService.update(id, updateExerciseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    const exercise = this.exerciseService.findOne(id);
    if(!exercise) {
      throw new NotFoundException("Exercise not found");
    }
    return this.exerciseService.remove(id);
  }
}
