import { Navigate, Outlet } from "react-router-dom";
import { useUserContext } from "../context/user_context";

const PrivateRoute = () => {
    const {productUser} = useUserContext()
    console.log(productUser)
  return productUser ? <Outlet /> : <Navigate to="/" />
}

export default PrivateRoute