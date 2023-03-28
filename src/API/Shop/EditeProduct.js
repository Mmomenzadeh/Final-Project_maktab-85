import { HttpService } from "Services/HttpService";

export const EditeProductService = async (id, data) =>
  await HttpService.put(`/products/${id}`, { ...data, id: id });
