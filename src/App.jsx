import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Store } from "Redux/Store";
import { ProjectRoutes } from "Routes";

function App() {
  return (
    <BrowserRouter>
      <Provider store={Store}>
        <ProjectRoutes />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
