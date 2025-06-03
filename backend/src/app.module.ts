import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { WorkoutSessionModule } from './workout-session/workout-session.module';
import { WorkoutLogModule } from './workout-log/workout-log.module';
import { ExerciseModule } from './exercise/exercise.module';
import { WorkoutDaysModule } from './workout_days/workout_days.module';
import { WorkoutPlansModule } from './workout_plans/workout_plans.module';
import { ExerciseCategoriesModule } from './exercise_categories/exercise_categories.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import configuration from './config/configuration';
import { Exercise } from './exercise/entities/exercise.entity';
import { User } from './user/entities/user.entity';
import { ExerciseCategory } from './exercise_categories/entities/exercise_category.entity';
import { WorkoutDay } from './workout_days/entities/workout_day.entity';
import { WorkoutPlan } from './workout_plans/entities/workout_plan.entity';
import { WorkoutLog } from './workout-log/entities/workout-log.entity';
import { WorkoutSession } from './workout-session/entities/workout-session.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
      envFilePath: '.env.development',
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => {
        return {
          type: configService.get('db.type'),
          host: configService.get('db.host'),
          port: configService.get('db.port'),
          username: configService.get('db.username'),
          password: configService.get('db.password'),
          database: configService.get('db.database'),
          schema: configService.get('db.schema'),
          autoLoadEntities: true,
        } as any;
      },
      inject: [ConfigService],

    }),
    TypeOrmModule.forFeature([
      WorkoutSession,
      WorkoutLog,
      Exercise,
      ExerciseCategory,
      User,
      WorkoutDay,
      WorkoutPlan,
      WorkoutLog,

  ]),
    UserModule, WorkoutSessionModule, WorkoutLogModule, ExerciseModule, WorkoutDaysModule, WorkoutPlansModule, ExerciseCategoriesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
