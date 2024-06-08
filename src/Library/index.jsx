import {toast} from "sonner";
import {RemoveUserAction} from "@/context/Features/Actions.js";

export const CatchActionForForms = (e , setError , loadingName)=>
{
    toast.dismiss(loadingName)
    if(e.response.data.errors)
    {
        Object.keys(e.response.data.errors).forEach((key)=>
        {
            const error = e.response.data.errors[key].join();
            setError(key , {message : error} )
        })
    }else {
        toast.error(e || e.message)
    }
}

export const CatchAction = (e , loadingName)=>
{
    toast.dismiss(loadingName)
    toast.error( e?.response?.data?.message || e?.message)
}

// TOKEN NAME
export const TOKEN_NAME = 'authToken'
export const LOGIN_ROUTE = '/login'

// logout

export const logout = (dispatch , navigate )=>
{
    deleteToken()
    dispatch(RemoveUserAction())
    console.log('su')
    navigate(LOGIN_ROUTE , { replace: true })
}

export const isTokenExist = ()=>
{
    return localStorage.getItem(TOKEN_NAME);
}

export const deleteToken = ()=>
{
    return localStorage.removeItem(TOKEN_NAME)
}
