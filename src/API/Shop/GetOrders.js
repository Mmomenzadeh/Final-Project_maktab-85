import { HttpService } from "Services/HttpService";

export const GetOrders= async () => await HttpService.get("/orders")