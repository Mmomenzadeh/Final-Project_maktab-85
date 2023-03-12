import { Header, MainLayout } from "Layouts";

export const Home = () => {
  return (
    <div className="home" style={{ overflowX: "hidden" }}>
      <Header />
      <MainLayout />
    </div>
  );
};
