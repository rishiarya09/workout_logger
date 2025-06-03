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
exports.WorkoutSession = void 0;
const user_entity_1 = require("../../user/entities/user.entity");
const workout_log_entity_1 = require("../../workout-log/entities/workout-log.entity");
const workout_day_entity_1 = require("../../workout_days/entities/workout_day.entity");
const typeorm_1 = require("typeorm");
let WorkoutSession = class WorkoutSession {
};
exports.WorkoutSession = WorkoutSession;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], WorkoutSession.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User),
    __metadata("design:type", user_entity_1.User)
], WorkoutSession.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => workout_day_entity_1.WorkoutDay),
    __metadata("design:type", workout_day_entity_1.WorkoutDay)
], WorkoutSession.prototype, "workout_day", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => workout_log_entity_1.WorkoutLog, (log) => log.session),
    __metadata("design:type", Array)
], WorkoutSession.prototype, "logs", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", String)
], WorkoutSession.prototype, "session_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", String)
], WorkoutSession.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", String)
], WorkoutSession.prototype, "updated_at", void 0);
exports.WorkoutSession = WorkoutSession = __decorate([
    (0, typeorm_1.Entity)('workout_sessions')
], WorkoutSession);
//# sourceMappingURL=workout-session.entity.js.map