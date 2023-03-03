import { LogIn } from "Pages";
import { Navigate, Route } from "react-router-dom";

const PrivateRoutes = ({Component : Component , ...rest}) => {
    return ( 

        <Route {...rest}  render={props => 
        LogIn ? <Component {...props} /> : <Navigate to="/logIn"/>
            
        }/>
     );
}
 
export default PrivateRoutes;