"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const user_module_1 = require("./user/user.module");
const workout_session_module_1 = require("./workout-session/workout-session.module");
const workout_log_module_1 = require("./workout-log/workout-log.module");
const exercise_module_1 = require("./exercise/exercise.module");
const workout_days_module_1 = require("./workout_days/workout_days.module");
const workout_plans_module_1 = require("./workout_plans/workout_plans.module");
const exercise_categories_module_1 = require("./exercise_categories/exercise_categories.module");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const configuration_1 = require("./config/configuration");
const exercise_entity_1 = require("./exercise/entities/exercise.entity");
const user_entity_1 = require("./user/entities/user.entity");
const exercise_category_entity_1 = require("./exercise_categories/entities/exercise_category.entity");
const workout_day_entity_1 = require("./workout_days/entities/workout_day.entity");
const workout_plan_entity_1 = require("./workout_plans/entities/workout_plan.entity");
const workout_log_entity_1 = require("./workout-log/entities/workout-log.entity");
const workout_session_entity_1 = require("./workout-session/entities/workout-session.entity");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                load: [configuration_1.default],
                isGlobal: true,
                envFilePath: '.env.development',
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useFactory: (configService) => {
                    return {
                        type: configService.get('db.type'),
                        host: configService.get('db.host'),
                        port: configService.get('db.port'),
                        username: configService.get('db.username'),
                        password: configService.get('db.password'),
                        database: configService.get('db.database'),
                        schema: configService.get('db.schema'),
                        autoLoadEntities: true,
                    };
                },
                inject: [config_1.ConfigService],
            }),
            typeorm_1.TypeOrmModule.forFeature([
                workout_session_entity_1.WorkoutSession,
                workout_log_entity_1.WorkoutLog,
                exercise_entity_1.Exercise,
                exercise_category_entity_1.ExerciseCategory,
                user_entity_1.User,
                workout_day_entity_1.WorkoutDay,
                workout_plan_entity_1.WorkoutPlan,
                workout_log_entity_1.WorkoutLog,
            ]),
            user_module_1.UserModule, workout_session_module_1.WorkoutSessionModule, workout_log_module_1.WorkoutLogModule, exercise_module_1.ExerciseModule, workout_days_module_1.WorkoutDaysModule, workout_plans_module_1.WorkoutPlansModule, exercise_categories_module_1.ExerciseCategoriesModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map