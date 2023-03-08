import { PANLEMANAGEMENT_ORDERS } from "Config";
import { PANLEMANAGEMENT_STOCK } from "Config";
import { PANLEMANAGEMENT } from "Config";
import { Route, Routes } from "react-router-dom";
import { ManagementPanleOrders, ManagementPanleProducts, ManagementPanleStock } from ".";

export const RoutsManagementPanel = () => {
  return (
    <Routes>
    <Route path="/" element={<ManagementPanleProducts/>}/>
    <Route path={PANLEMANAGEMENT_ORDERS} element={<ManagementPanleOrders/>}/>
    <Route path={PANLEMANAGEMENT_STOCK} element={<ManagementPanleStock/>}/>
  </Routes>
  )
}
