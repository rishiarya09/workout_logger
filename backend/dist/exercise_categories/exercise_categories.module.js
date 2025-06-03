"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExerciseCategoriesModule = void 0;
const common_1 = require("@nestjs/common");
const exercise_categories_service_1 = require("./exercise_categories.service");
const exercise_categories_controller_1 = require("./exercise_categories.controller");
let ExerciseCategoriesModule = class ExerciseCategoriesModule {
};
exports.ExerciseCategoriesModule = ExerciseCategoriesModule;
exports.ExerciseCategoriesModule = ExerciseCategoriesModule = __decorate([
    (0, common_1.Module)({
        controllers: [exercise_categories_controller_1.ExerciseCategoriesController],
        providers: [exercise_categories_service_1.ExerciseCategoriesService],
    })
], ExerciseCategoriesModule);
//# sourceMappingURL=exercise_categories.module.js.map