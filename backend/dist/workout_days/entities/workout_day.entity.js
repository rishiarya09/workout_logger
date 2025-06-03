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
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkoutDay = void 0;
const workout_plan_entity_1 = require("../../workout_plans/entities/workout_plan.entity");
const typeorm_1 = require("typeorm");
let WorkoutDay = class WorkoutDay {
};
exports.WorkoutDay = WorkoutDay;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], WorkoutDay.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => workout_plan_entity_1.WorkoutPlan),
    __metadata("design:type", workout_plan_entity_1.WorkoutPlan)
], WorkoutDay.prototype, "workout_plan_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], WorkoutDay.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], WorkoutDay.prototype, "day_number", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", String)
], WorkoutDay.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", String)
], WorkoutDay.prototype, "updated_at", void 0);
exports.WorkoutDay = WorkoutDay = __decorate([
    (0, typeorm_1.Entity)('workout_days')
], WorkoutDay);
//# sourceMappingURL=workout_day.entity.js.map