"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkoutLogService = void 0;
const common_1 = require("@nestjs/common");
let WorkoutLogService = class WorkoutLogService {
    create(createWorkoutLogDto) {
        return 'This action adds a new workoutLog';
    }
    findAll() {
        return `This action returns all workoutLog`;
    }
    findOne(id) {
        return `This action returns a #${id} workoutLog`;
    }
    update(id, updateWorkoutLogDto) {
        return `This action updates a #${id} workoutLog`;
    }
    remove(id) {
        return `This action removes a #${id} workoutLog`;
    }
};
exports.WorkoutLogService = WorkoutLogService;
exports.WorkoutLogService = WorkoutLogService = __decorate([
    (0, common_1.Injectable)()
], WorkoutLogService);
//# sourceMappingURL=workout-log.service.js.map