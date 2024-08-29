import { Router } from "express";
import { getCategories, getCategoriesById, createCategories, deleteCategories, updateCategories } from "../controllers/categories_controller";
import { authenticateToken } from "../middleware/authorization";

export const categoriesRoutes = Router();

categoriesRoutes.get('/categories', getCategories);
categoriesRoutes.get('/categories/:id', getCategoriesById);
categoriesRoutes.post('/createCategories', createCategories);
categoriesRoutes.delete('/deleteCategories/:id', deleteCategories);
categoriesRoutes.put('/updateCategories/:id', updateCategories);