import { PANLEMANAGEMENT_ORDERS } from "Config";
import { PANLEMANAGEMENT_STOCK } from "Config";
import { PANLEMANAGEMENT } from "Config";
import { AdminMain } from "Layouts";
import { Route, Routes } from "react-router-dom";
import { ManagementPanleOrders, ManagementPanleProducts, ManagementPanleStock } from ".";

export const RoutsManagementPanel = () => {
  return (
    <Route element={<AdminMain/>}>
    <Route path="/" element={<ManagementPanleOrders/>}/>
    <Route path="/products" element={<ManagementPanleProducts/>}/>
    <Route path="/stock" element={<ManagementPanleStock/>}/>
  </Route>
  )
}
