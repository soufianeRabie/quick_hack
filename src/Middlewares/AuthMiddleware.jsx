import {useGlobalContext} from "@/context/GlobalState.jsx";
import {Navigate} from "react-router-dom";
import {deleteToken} from "@/Library/index.jsx";

function AuthMiddleware({children , allowedRoles=[] }) {
  const {state }= useGlobalContext()

    if(!allowedRoles.includes(state?.user?.role_id))
    {
        deleteToken()
        return  <Navigate to={'/login'} replace={true}/>

    }

    return <>{children}</>
}

export default AuthMiddleware;
