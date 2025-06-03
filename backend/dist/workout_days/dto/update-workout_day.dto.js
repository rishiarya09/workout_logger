"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateWorkoutDayDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_workout_day_dto_1 = require("./create-workout_day.dto");
class UpdateWorkoutDayDto extends (0, mapped_types_1.PartialType)(create_workout_day_dto_1.CreateWorkoutDayDto) {
}
exports.UpdateWorkoutDayDto = UpdateWorkoutDayDto;
//# sourceMappingURL=update-workout_day.dto.js.map