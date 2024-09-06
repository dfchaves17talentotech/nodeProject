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
exports.getMoors = void 0;
const axios_1 = __importDefault(require("axios"));
const getMoors = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.get('https://services6.arcgis.com/yq6pe3Lw2oWFjWtF/ArcGIS/rest/services/Paramos/FeatureServer/0/query?where=Codigo%20%3D%20%27CE-CM-CHG%27&outFields=Codigo&outSR=4326&f=json');
        return res.status(200).json(response.data);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json('Internal Server Error');
    }
});
exports.getMoors = getMoors;
