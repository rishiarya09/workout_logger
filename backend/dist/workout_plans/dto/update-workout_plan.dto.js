"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateWorkoutPlanDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_workout_plan_dto_1 = require("./create-workout_plan.dto");
class UpdateWorkoutPlanDto extends (0, mapped_types_1.PartialType)(create_workout_plan_dto_1.CreateWorkoutPlanDto) {
}
exports.UpdateWorkoutPlanDto = UpdateWorkoutPlanDto;
//# sourceMappingURL=update-workout_plan.dto.js.map