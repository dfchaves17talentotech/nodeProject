import axios from 'axios';
import { Request, Response } from "express";

export const getMoors= async (req: Request, res:Response): Promise<Response> =>{
    try {
        const response =  await axios.get('https://services6.arcgis.com/yq6pe3Lw2oWFjWtF/ArcGIS/rest/services/Paramos/FeatureServer/0/query?where=Codigo%20%3D%20%27CE-CM-CHG%27&outFields=Codigo&outSR=4326&f=json');
        return res.status(200).json(response.data);
    } catch (error) {
        console.error(error);
        return res.status(500).json('Internal Server Error');
    }
};
