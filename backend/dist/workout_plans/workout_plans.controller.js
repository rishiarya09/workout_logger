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
exports.WorkoutPlansController = void 0;
const common_1 = require("@nestjs/common");
const workout_plans_service_1 = require("./workout_plans.service");
const create_workout_plan_dto_1 = require("./dto/create-workout_plan.dto");
const update_workout_plan_dto_1 = require("./dto/update-workout_plan.dto");
let WorkoutPlansController = class WorkoutPlansController {
    constructor(workoutPlansService) {
        this.workoutPlansService = workoutPlansService;
    }
    create(createWorkoutPlanDto) {
        return this.workoutPlansService.create(createWorkoutPlanDto);
    }
    findAll() {
        return this.workoutPlansService.findAll();
    }
    findOne(id) {
        return this.workoutPlansService.findOne(+id);
    }
    update(id, updateWorkoutPlanDto) {
        return this.workoutPlansService.update(+id, updateWorkoutPlanDto);
    }
    remove(id) {
        return this.workoutPlansService.remove(+id);
    }
};
exports.WorkoutPlansController = WorkoutPlansController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_workout_plan_dto_1.CreateWorkoutPlanDto]),
    __metadata("design:returntype", void 0)
], WorkoutPlansController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], WorkoutPlansController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], WorkoutPlansController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_workout_plan_dto_1.UpdateWorkoutPlanDto]),
    __metadata("design:returntype", void 0)
], WorkoutPlansController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], WorkoutPlansController.prototype, "remove", null);
exports.WorkoutPlansController = WorkoutPlansController = __decorate([
    (0, common_1.Controller)('workout-plans'),
    __metadata("design:paramtypes", [workout_plans_service_1.WorkoutPlansService])
], WorkoutPlansController);
//# sourceMappingURL=workout_plans.controller.js.map