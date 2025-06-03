"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateExerciseCategoryDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_exercise_category_dto_1 = require("./create-exercise_category.dto");
class UpdateExerciseCategoryDto extends (0, mapped_types_1.PartialType)(create_exercise_category_dto_1.CreateExerciseCategoryDto) {
}
exports.UpdateExerciseCategoryDto = UpdateExerciseCategoryDto;
//# sourceMappingURL=update-exercise_category.dto.js.map