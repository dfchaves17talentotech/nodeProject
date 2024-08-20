import express, { Router } from "express";
import { createCategories, getCategories, getCategoriesById } from "./controllers/categories_controller";

require('dotenv').config();

const app = express();
const port = process.env.PORT;

const categoriesRoutes = Router();

app.use(express.json());

categoriesRoutes.get('/categories', getCategories);
categoriesRoutes.get('/categories/:id', getCategoriesById);
categoriesRoutes.post('/createCategories', createCategories);

app.use(categoriesRoutes);

app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`)
});