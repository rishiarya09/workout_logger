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
exports.ExerciseCategoriesService = void 0;
const common_1 = require("@nestjs/common");
const exercise_category_entity_1 = require("./entities/exercise_category.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let ExerciseCategoriesService = class ExerciseCategoriesService {
    constructor(ExerciseCategoryRepo) {
        this.ExerciseCategoryRepo = ExerciseCategoryRepo;
    }
    async create(createExerciseCategoryDto) {
        const name = createExerciseCategoryDto.name;
        const exisiting = await this.ExerciseCategoryRepo.findOne({ where: { name } });
        if (exisiting)
            return exisiting;
        const exercise = this.ExerciseCategoryRepo.create(createExerciseCategoryDto);
        const saved = await this.ExerciseCategoryRepo.save(exercise);
        return saved;
    }
    findAll() {
        return this.ExerciseCategoryRepo.find();
    }
    findOne(id) {
        return this.ExerciseCategoryRepo.findOne({ where: { id } });
    }
    async update(id, updateExerciseCategoryDto) {
        const updatedexercise = this.ExerciseCategoryRepo.update(id, updateExerciseCategoryDto);
        return this.ExerciseCategoryRepo.findOne({ where: { id } });
    }
    async remove(id) {
        return this.ExerciseCategoryRepo.delete(id);
    }
};
exports.ExerciseCategoriesService = ExerciseCategoriesService;
exports.ExerciseCategoriesService = ExerciseCategoriesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(exercise_category_entity_1.ExerciseCategory)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ExerciseCategoriesService);
//# sourceMappingURL=exercise_categories.service.js.map