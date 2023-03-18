import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Store } from "Redux/Store";
import { ProjectRoutes } from "Routes";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <Provider store={Store}>
        <ToastContainer/>
        <ProjectRoutes />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
