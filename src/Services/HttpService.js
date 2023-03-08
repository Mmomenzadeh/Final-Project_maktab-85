import axios from "axios";
import { BASE_URL } from "Config";

export const HttpService = axios.create({
    baseURL : BASE_URL , 
    timeout : 30000 ,
})