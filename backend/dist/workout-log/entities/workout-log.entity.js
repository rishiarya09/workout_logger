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
exports.WorkoutLog = void 0;
const exercise_entity_1 = require("../../exercise/entities/exercise.entity");
const workout_session_entity_1 = require("../../workout-session/entities/workout-session.entity");
const typeorm_1 = require("typeorm");
let WorkoutLog = class WorkoutLog {
};
exports.WorkoutLog = WorkoutLog;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], WorkoutLog.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => workout_session_entity_1.WorkoutSession),
    (0, typeorm_1.JoinColumn)({ name: 'workout_session_id' }),
    __metadata("design:type", workout_session_entity_1.WorkoutSession)
], WorkoutLog.prototype, "session", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => exercise_entity_1.Exercise),
    __metadata("design:type", exercise_entity_1.Exercise)
], WorkoutLog.prototype, "exercise", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], WorkoutLog.prototype, "set_number", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], WorkoutLog.prototype, "reps", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], WorkoutLog.prototype, "weight", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", String)
], WorkoutLog.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", String)
], WorkoutLog.prototype, "updated_at", void 0);
exports.WorkoutLog = WorkoutLog = __decorate([
    (0, typeorm_1.Entity)('exercise_sets')
], WorkoutLog);
//# sourceMappingURL=workout-log.entity.js.map