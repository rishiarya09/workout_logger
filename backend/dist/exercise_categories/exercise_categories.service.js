"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExerciseCategoriesService = void 0;
const common_1 = require("@nestjs/common");
let ExerciseCategoriesService = class ExerciseCategoriesService {
    create(createExerciseCategoryDto) {
        return 'This action adds a new exerciseCategory';
    }
    findAll() {
        return `This action returns all exerciseCategories`;
    }
    findOne(id) {
        return `This action returns a #${id} exerciseCategory`;
    }
    update(id, updateExerciseCategoryDto) {
        return `This action updates a #${id} exerciseCategory`;
    }
    remove(id) {
        return `This action removes a #${id} exerciseCategory`;
    }
};
exports.ExerciseCategoriesService = ExerciseCategoriesService;
exports.ExerciseCategoriesService = ExerciseCategoriesService = __decorate([
    (0, common_1.Injectable)()
], ExerciseCategoriesService);
//# sourceMappingURL=exercise_categories.service.js.map