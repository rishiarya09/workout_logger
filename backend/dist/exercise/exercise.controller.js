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
exports.ExerciseController = void 0;
const common_1 = require("@nestjs/common");
const exercise_service_1 = require("./exercise.service");
const exercise_entity_1 = require("./entities/exercise.entity");
let ExerciseController = class ExerciseController {
    constructor(exerciseService) {
        this.exerciseService = exerciseService;
    }
    async create(createExerciseDto) {
        const serv_res = await this.exerciseService.create(createExerciseDto);
        const res = {
            message: "",
            data: {}
        };
        if (serv_res) {
            res.message = "New Exercise created successfully";
            res.data = serv_res;
        }
        return res;
    }
    async findAll() {
        return this.exerciseService.findAll();
    }
    async findOne(id) {
        const exercise = this.exerciseService.findOne(id);
        if (!exercise) {
            throw new common_1.NotFoundException("Exercise not found");
        }
        else {
            return exercise;
        }
    }
    update(id, updateExerciseDto) {
        return this.exerciseService.update(id, updateExerciseDto);
    }
    remove(id) {
        const exercise = this.exerciseService.findOne(id);
        if (!exercise) {
            throw new common_1.NotFoundException("Exercise not found");
        }
        return this.exerciseService.remove(id);
    }
};
exports.ExerciseController = ExerciseController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [exercise_entity_1.Exercise]),
    __metadata("design:returntype", Promise)
], ExerciseController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ExerciseController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ExerciseController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ExerciseController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ExerciseController.prototype, "remove", null);
exports.ExerciseController = ExerciseController = __decorate([
    (0, common_1.Controller)('exercise'),
    __metadata("design:paramtypes", [exercise_service_1.ExerciseService])
], ExerciseController);
//# sourceMappingURL=exercise.controller.js.map