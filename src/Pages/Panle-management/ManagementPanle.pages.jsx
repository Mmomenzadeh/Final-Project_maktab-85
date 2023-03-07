import { AdminHeader, AdminMain, SideBar } from "Layouts";
import "../../Assets/Styles/Pages/ManagementPanle/index.scss";

export const ManagementPanle = () => {
  return (
    <div className="managementPanle">
      <AdminHeader />
      <div className="managementPanle__main">
        <SideBar />
        <AdminMain />
      </div>
    </div>
  );
};
