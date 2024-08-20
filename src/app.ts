import express, { Router } from "express";
import { createCategories, deleteCategories, getCategories, getCategoriesById, updateCategories } from "./controllers/categories_controller";

require('dotenv').config();

const app = express();
const port = process.env.PORT;

const categoriesRoutes = Router();
categoriesRoutes.get('/categories', getCategories);
categoriesRoutes.get('/categories/:id', getCategoriesById);
categoriesRoutes.post('/createCategories', createCategories);
categoriesRoutes.delete('/deleteCategories/:id', deleteCategories);
categoriesRoutes.put('/updateCategories/:id', updateCategories);

app.use(express.json());
app.use(categoriesRoutes);

app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`)
});