import express, { Router } from "express";
import { errorHandler } from "./middleware/error";
import { customersRoutes } from "./routes/customer_routes";
import { categoriesRoutes } from "./routes/categorie_routes";
import { userRoutes } from "./routes/user_routes";
import cors from "cors";
import { paramosRouter } from "./routes/paramos_router";

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(errorHandler);

app.use(categoriesRoutes);
app.use(userRoutes);
app.use(customersRoutes);
app.use(paramosRouter);


app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`)
});
