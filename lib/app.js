"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const error_1 = require("./middleware/error");
const customer_routes_1 = require("./routes/customer_routes");
const categorie_routes_1 = require("./routes/categorie_routes");
const user_routes_1 = require("./routes/user_routes");
const cors_1 = __importDefault(require("cors"));
require('dotenv').config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(error_1.errorHandler);
app.use(categorie_routes_1.categoriesRoutes);
app.use(user_routes_1.userRoutes);
app.use(customer_routes_1.customersRoutes);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
