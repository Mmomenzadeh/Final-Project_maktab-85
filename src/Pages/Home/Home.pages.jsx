import { Footer, Header, MainLayout } from "Layouts";
import { useState } from "react";

export const Home = () => {
  const [showSearchBox, setShowSearchBox] = useState(false);

  return (
    <div className="home">
      <Header
        showSearchBox={showSearchBox}
        setShowSearchBox={setShowSearchBox}
      />
      <MainLayout
        showSearchBox={showSearchBox}
        setShowSearchBox={setShowSearchBox}
      />
      <Footer />
    </div>
  );
};
