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
exports.ExerciseService = void 0;
const common_1 = require("@nestjs/common");
const exercise_entity_1 = require("./entities/exercise.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
let ExerciseService = class ExerciseService {
    constructor(excersieRepo) {
        this.excersieRepo = excersieRepo;
    }
    async create(createExerciseDto) {
        const exercise = this.excersieRepo.create(createExerciseDto);
        return this.excersieRepo.save(exercise);
    }
    async findAll() {
        return this.excersieRepo.find();
    }
    async findOne(id) {
        return this.excersieRepo.findOne({ where: { id } });
    }
    async update(id, updateExerciseDto) {
        const updatedexercise = this.excersieRepo.update(id, updateExerciseDto);
        return this.excersieRepo.findOne({ where: { id } });
    }
    async remove(id) {
        return this.excersieRepo.delete(id);
    }
};
exports.ExerciseService = ExerciseService;
exports.ExerciseService = ExerciseService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(exercise_entity_1.Exercise)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], ExerciseService);
//# sourceMappingURL=exercise.service.js.map