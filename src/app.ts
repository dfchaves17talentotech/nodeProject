import express, { Router } from "express";
import { createCategories, deleteCategories, getCategories, getCategoriesById, updateCategories } from "./controllers/categories_controller";
import { authenticateToken, generateToken } from "./controllers/user_controller";

require('dotenv').config();

const app = express();
const port = process.env.PORT;

const categoriesRoutes = Router();
const userRoutes = Router();
categoriesRoutes.get('/categories',authenticateToken, getCategories);
categoriesRoutes.get('/categories/:id',authenticateToken, getCategoriesById);
categoriesRoutes.post('/createCategories',authenticateToken, createCategories);
categoriesRoutes.delete('/deleteCategories/:id',authenticateToken, deleteCategories);
categoriesRoutes.put('/updateCategories/:id',authenticateToken, updateCategories);
userRoutes.post('/api/login', generateToken);

app.use(express.json());
app.use(categoriesRoutes);
app.use(userRoutes);

app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`)
});