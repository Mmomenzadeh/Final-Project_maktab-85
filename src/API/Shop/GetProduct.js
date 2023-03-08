import { HttpService } from "Services/HttpService";

export const GetProduct = async ()=> await HttpService.get("/products")