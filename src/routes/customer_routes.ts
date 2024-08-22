import { Router } from "express";
import { createCustomer, deleteCustomer, getCustomers, getCustomersById, updateCustomers } from "../controllers/customers_controller";
import { authenticateToken } from "../middleware/authorization";

export const customersRoutes = Router();

customersRoutes.get('/customers',authenticateToken, getCustomers);
customersRoutes.get('/customers/:id',authenticateToken, getCustomersById);
customersRoutes.post('/createCustomer',authenticateToken, createCustomer);
customersRoutes.delete('/deleteCustomer/:id',authenticateToken, deleteCustomer);
customersRoutes.put('/updateCustomer/:id',authenticateToken, updateCustomers);