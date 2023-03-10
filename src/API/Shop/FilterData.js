import { HttpService } from "Services/HttpService";

export const FilterData = async (params) => HttpService.get(params)