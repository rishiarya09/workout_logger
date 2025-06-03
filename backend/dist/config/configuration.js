"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => ({
    host: process.env.HOST || 'localhost',
    port: process.env.PORT ? parseInt(process.env.PORT, 10) : 3000,
    db: {
        type: process.env.DB_TYPE || 'postgres',
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 5432,
        username: process.env.DB_USER || 'postgres',
        password: process.env.PASSWORD || 'Apple@1836',
        database: process.env.DB_DATABASE || 'Workout_logger',
        schema: process.env.DB_SCHEMA || 'workout_logger',
    }
});
//# sourceMappingURL=configuration.js.map