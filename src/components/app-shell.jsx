import {Outlet, useNavigate} from 'react-router-dom'
import Sidebar from './sidebar.jsx'
import useIsCollapsed from "./Hooks/use-is-collapsed.js";
import {useEffect} from "react";
import {useGlobalContext} from "@/context/GlobalState.jsx";
import {useGetInitialize} from "@/components/Hooks/useGetInitialize.js";
import {isTokenExist, logout} from "@/Library/index.jsx";
import {SetIsError, SetUserAction} from "@/context/Features/Actions.js";
import {ActionsApi} from "@/Services/Actions/ActionsApi.js";


export default function AppShell() {

    const {state , dispatch } = useGlobalContext()
    const {getInitialize,} = useGetInitialize()
    const navigate = useNavigate()
    useEffect(() => {
        const fetchInitialize = async () => {
            await getInitialize();
        }

        fetchInitialize()

    }, []);
    useEffect(() => {
        console.log('yes error ' , state.error)

        if(state.error === 'Unauthenticated.')
        {
            logout(dispatch , navigate)
            dispatch( SetIsError({error : null , isError : false}))
        }

    }, [state.error ]);

    useEffect(() => {
        const checkLoggedUser = () => {
            console.log(isTokenExist())
            return isTokenExist()
        }
        const fetchUser = async ()=>
        {
            if(!state.user)
            {
                console.log('suiiii')
                const response =  await ActionsApi.getUser()
                dispatch(SetUserAction({user: response.data.user}))
            }
        }
        try {
            if(!checkLoggedUser())
            {
                logout(dispatch , navigate)
            }else if(!state.user)
            {
                fetchUser()
            }
        }catch (err)
        {
            logout(dispatch , navigate)
        }

    }, []);

    const [isCollapsed, setIsCollapsed] = useIsCollapsed()
    return (
        <div className='relative h-full overflow-hidden bg-background'>
            <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
            <main
                id='content'
                className={`overflow-x-hidden pt-16 transition-[margin] md:overflow-y-hidden md:pt-0 ${isCollapsed ? 'md:ml-14' : 'md:ml-64'} h-full`}
            >
                <Outlet />
            </main>
        </div>
    )
}
