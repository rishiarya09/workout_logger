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
exports.WorkoutLogController = void 0;
const common_1 = require("@nestjs/common");
const workout_log_service_1 = require("./workout-log.service");
const create_workout_log_dto_1 = require("./dto/create-workout-log.dto");
const update_workout_log_dto_1 = require("./dto/update-workout-log.dto");
let WorkoutLogController = class WorkoutLogController {
    constructor(workoutLogService) {
        this.workoutLogService = workoutLogService;
    }
    create(createWorkoutLogDto) {
        return this.workoutLogService.create(createWorkoutLogDto);
    }
    findAll() {
        return this.workoutLogService.findAll();
    }
    findOne(id) {
        return this.workoutLogService.findOne(+id);
    }
    update(id, updateWorkoutLogDto) {
        return this.workoutLogService.update(+id, updateWorkoutLogDto);
    }
    remove(id) {
        return this.workoutLogService.remove(+id);
    }
};
exports.WorkoutLogController = WorkoutLogController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_workout_log_dto_1.CreateWorkoutLogDto]),
    __metadata("design:returntype", void 0)
], WorkoutLogController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], WorkoutLogController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], WorkoutLogController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_workout_log_dto_1.UpdateWorkoutLogDto]),
    __metadata("design:returntype", void 0)
], WorkoutLogController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], WorkoutLogController.prototype, "remove", null);
exports.WorkoutLogController = WorkoutLogController = __decorate([
    (0, common_1.Controller)('workout-log'),
    __metadata("design:paramtypes", [workout_log_service_1.WorkoutLogService])
], WorkoutLogController);
//# sourceMappingURL=workout-log.controller.js.map