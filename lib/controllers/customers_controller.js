"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCustomers = exports.deleteCustomer = exports.createCustomer = exports.getCustomersById = exports.getCustomers = void 0;
const db_connect_1 = __importDefault(require("../database/db_connect"));
/**
 * Get All Data of Customers Table.
 * @param req
 * @param res
 * @returns Customers
 */
const getCustomers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield db_connect_1.default.query('SELECT * FROM customers;');
        return res.status(200).json(response.rows);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json('Internal Server Error');
    }
});
exports.getCustomers = getCustomers;
/**
 * Get Customers by Id.
 * @param req
 * @param res
 * @returns
 */
const getCustomersById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const response = yield db_connect_1.default.query('SELECT * FROM customers WHERE customer_id = $1;', [id]);
        return res.status(200).json(response.rows);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json('Internal Server Error');
    }
});
exports.getCustomersById = getCustomersById;
/**
 * Create Customers
 * @param req
 * @param res
 * @returns
 */
const createCustomer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { customerId, companyName, contactName, contactTitle, address, postalCode, city, region, country, phone, fax } = req.body;
    if (customerId !== null && companyName !== null && contactName !== null &&
        address !== null && city !== null && country !== null && phone !== null) {
        try {
            yield db_connect_1.default.query('INSERT INTO customers (customer_id, company_name, contact_name, contact_title, address, city, region, postal_code, country, phone, fax) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11);', [customerId, companyName, contactName, contactTitle, address, city, region, postalCode, country, phone, fax]);
            return res.status(201).json({
                message: 'Customer created successfully',
                category: {
                    customerId,
                    companyName,
                    contactName,
                    contactTitle,
                    address,
                    city,
                    region,
                    postalCode,
                    country,
                    phone,
                    fax,
                }
            });
        }
        catch (error) {
            console.error(error);
            return res.status(500).json('Internal Server Error');
        }
    }
    else {
        return res.status(500).json('Internal Server Error');
    }
});
exports.createCustomer = createCustomer;
/**
 * Delete Customers By Id
 * @param req
 * @param res
 * @returns
 */
const deleteCustomer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    if (id !== null) {
        try {
            yield db_connect_1.default.query('DELETE FROM customers WHERE customer_id = $1', [id]);
            return res.status(200).json(`The customer ${id} delete successfully.`);
        }
        catch (error) {
            console.error(error);
            return res.status(500).json('Internal Server Error');
        }
    }
    else {
        return res.status(500).json('Id Not Found');
    }
});
exports.deleteCustomer = deleteCustomer;
/**
 * Update Customers By Id.
 * @param req
 * @param res
 * @returns
 */
const updateCustomers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const customerId = req.params.id;
    const { companyName, contactName, contactTitle, address, postalCode, city, region, country, phone, fax } = req.body;
    if (customerId !== null && companyName !== null && contactName !== null &&
        address !== null && city !== null && country !== null && phone !== null) {
        try {
            yield db_connect_1.default.query('UPDATE customers SET company_name= $1, contact_name =$2, contact_title= $3, address = $4, city = $5, region= $6, postal_code = $7, country= $8, phone =$9, fax= $10 WHERE customer_id = $11', [companyName, contactName, contactTitle, address, city, region, postalCode, country, phone, fax, customerId]);
            return res.json({
                message: 'Customer Successfully Updated.',
                category: {
                    customerId,
                    companyName,
                    contactName,
                    contactTitle,
                    address,
                    city,
                    region,
                    postalCode,
                    country,
                    phone,
                    fax,
                },
            });
        }
        catch (error) {
            console.error(error);
            return res.status(500).json('Internal Server Error');
        }
    }
    else {
        return res.status(500).json('Not Null');
    }
});
exports.updateCustomers = updateCustomers;
