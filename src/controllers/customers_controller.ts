import { QueryResult } from "pg";
import pool from "../database/db_connect";
import { Request, Response } from "express";
/**
 * Get All Data of Customers Table.
 * @param req 
 * @param res 
 * @returns Customers
 */
export const getCustomers = async (req: Request, res:Response): Promise<Response> =>{
    try {
        const response: QueryResult = await pool.query('SELECT * FROM customers;');
        return res.status(200).json(response.rows);
    } catch (error) {
        console.error(error);
        return res.status(500).json('Internal Server Error');
    }
};