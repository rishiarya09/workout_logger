import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WorkoutDaysService } from './workout_days.service';
import { CreateWorkoutDayDto } from './dto/create-workout_day.dto';
import { UpdateWorkoutDayDto } from './dto/update-workout_day.dto';

@Controller('workout-days')
export class WorkoutDaysController {
  constructor(private readonly workoutDaysService: WorkoutDaysService) {}

  @Post()
  create(@Body() createWorkoutDayDto: CreateWorkoutDayDto) {
    return this.workoutDaysService.create(createWorkoutDayDto);
  }

  @Get()
  findAll() {
    return this.workoutDaysService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.workoutDaysService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWorkoutDayDto: UpdateWorkoutDayDto) {
    return this.workoutDaysService.update(+id, updateWorkoutDayDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.workoutDaysService.remove(+id);
  }
}
