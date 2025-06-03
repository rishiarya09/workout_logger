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
exports.WorkoutSessionController = void 0;
const common_1 = require("@nestjs/common");
const workout_session_service_1 = require("./workout-session.service");
const create_workout_session_dto_1 = require("./dto/create-workout-session.dto");
const update_workout_session_dto_1 = require("./dto/update-workout-session.dto");
let WorkoutSessionController = class WorkoutSessionController {
    constructor(workoutSessionService) {
        this.workoutSessionService = workoutSessionService;
    }
    create(createWorkoutSessionDto) {
        return this.workoutSessionService.create(createWorkoutSessionDto);
    }
    findAll() {
        return this.workoutSessionService.findAll();
    }
    findOne(id) {
        return this.workoutSessionService.findOne(+id);
    }
    update(id, updateWorkoutSessionDto) {
        return this.workoutSessionService.update(+id, updateWorkoutSessionDto);
    }
    remove(id) {
        return this.workoutSessionService.remove(+id);
    }
};
exports.WorkoutSessionController = WorkoutSessionController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_workout_session_dto_1.CreateWorkoutSessionDto]),
    __metadata("design:returntype", void 0)
], WorkoutSessionController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], WorkoutSessionController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], WorkoutSessionController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_workout_session_dto_1.UpdateWorkoutSessionDto]),
    __metadata("design:returntype", void 0)
], WorkoutSessionController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], WorkoutSessionController.prototype, "remove", null);
exports.WorkoutSessionController = WorkoutSessionController = __decorate([
    (0, common_1.Controller)('workout-session'),
    __metadata("design:paramtypes", [workout_session_service_1.WorkoutSessionService])
], WorkoutSessionController);
//# sourceMappingURL=workout-session.controller.js.map