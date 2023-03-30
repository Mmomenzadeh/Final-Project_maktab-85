import { HttpService } from "Services/HttpService";

export const EditeProductService = async (id, data) =>
  await HttpService.patch(`/products/${id}`, { ...data, id: id });
