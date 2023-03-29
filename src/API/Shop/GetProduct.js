import { HttpService } from "Services/HttpService";

export const GetProduct = async ()=> await HttpService.get("/products?_sort=createdAt&_order=asc")