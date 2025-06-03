"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateWorkoutLogDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_workout_log_dto_1 = require("./create-workout-log.dto");
class UpdateWorkoutLogDto extends (0, mapped_types_1.PartialType)(create_workout_log_dto_1.CreateWorkoutLogDto) {
}
exports.UpdateWorkoutLogDto = UpdateWorkoutLogDto;
//# sourceMappingURL=update-workout-log.dto.js.map