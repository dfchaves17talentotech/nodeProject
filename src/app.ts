import express, { Router } from "express";
import { getCategories, getCategoriesById } from "./controllers/categories_controller";

require('dotenv').config();

const app = express();
const port = process.env.PORT;

const categoriesRoutes = Router();

categoriesRoutes.get('/categories', getCategories);
categoriesRoutes.get('/categories/:id', getCategoriesById);

app.use(categoriesRoutes);

app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`)
});