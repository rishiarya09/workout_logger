"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkoutDaysController = void 0;
const common_1 = require("@nestjs/common");
const workout_days_service_1 = require("./workout_days.service");
const create_workout_day_dto_1 = require("./dto/create-workout_day.dto");
const update_workout_day_dto_1 = require("./dto/update-workout_day.dto");
let WorkoutDaysController = class WorkoutDaysController {
    constructor(workoutDaysService) {
        this.workoutDaysService = workoutDaysService;
    }
    create(createWorkoutDayDto) {
        return this.workoutDaysService.create(createWorkoutDayDto);
    }
    findAll() {
        return this.workoutDaysService.findAll();
    }
    findOne(id) {
        return this.workoutDaysService.findOne(+id);
    }
    update(id, updateWorkoutDayDto) {
        return this.workoutDaysService.update(+id, updateWorkoutDayDto);
    }
    remove(id) {
        return this.workoutDaysService.remove(+id);
    }
};
exports.WorkoutDaysController = WorkoutDaysController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_workout_day_dto_1.CreateWorkoutDayDto]),
    __metadata("design:returntype", void 0)
], WorkoutDaysController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], WorkoutDaysController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], WorkoutDaysController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_workout_day_dto_1.UpdateWorkoutDayDto]),
    __metadata("design:returntype", void 0)
], WorkoutDaysController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], WorkoutDaysController.prototype, "remove", null);
exports.WorkoutDaysController = WorkoutDaysController = __decorate([
    (0, common_1.Controller)('workout-days'),
    __metadata("design:paramtypes", [workout_days_service_1.WorkoutDaysService])
], WorkoutDaysController);
//# sourceMappingURL=workout_days.controller.js.map