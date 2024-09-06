"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paramosRouter = void 0;
const express_1 = require("express");
const paramos_controller_1 = require("../controllers/paramos_controller");
exports.paramosRouter = (0, express_1.Router)();
exports.paramosRouter.get('/paramos', paramos_controller_1.getMoors);
