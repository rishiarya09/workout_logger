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
exports.ExerciseCategoriesController = void 0;
const common_1 = require("@nestjs/common");
const exercise_categories_service_1 = require("./exercise_categories.service");
const create_exercise_category_dto_1 = require("./dto/create-exercise_category.dto");
const update_exercise_category_dto_1 = require("./dto/update-exercise_category.dto");
let ExerciseCategoriesController = class ExerciseCategoriesController {
    constructor(exerciseCategoriesService) {
        this.exerciseCategoriesService = exerciseCategoriesService;
    }
    async create(createExerciseCategoryDto) {
        const res_create = await this.exerciseCategoriesService.create(createExerciseCategoryDto);
        let res = { message: "", data: {} };
        if (res_create) {
            res.message = "New Category Created Succesfully",
                res.data = res_create;
        }
        return res;
    }
    findAll() {
        return this.exerciseCategoriesService.findAll();
    }
    findOne(id) {
        return this.exerciseCategoriesService.findOne(id);
    }
    update(id, updateExerciseCategoryDto) {
        return this.exerciseCategoriesService.update(id, updateExerciseCategoryDto);
    }
    remove(id) {
        return this.exerciseCategoriesService.remove(id);
    }
};
exports.ExerciseCategoriesController = ExerciseCategoriesController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_exercise_category_dto_1.CreateExerciseCategoryDto]),
    __metadata("design:returntype", Promise)
], ExerciseCategoriesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ExerciseCategoriesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ExerciseCategoriesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_exercise_category_dto_1.UpdateExerciseCategoryDto]),
    __metadata("design:returntype", void 0)
], ExerciseCategoriesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ExerciseCategoriesController.prototype, "remove", null);
exports.ExerciseCategoriesController = ExerciseCategoriesController = __decorate([
    (0, common_1.Controller)('exercise_categories'),
    __metadata("design:paramtypes", [exercise_categories_service_1.ExerciseCategoriesService])
], ExerciseCategoriesController);
//# sourceMappingURL=exercise_categories.controller.js.map