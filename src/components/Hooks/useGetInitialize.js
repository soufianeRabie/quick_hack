import {useGlobalContext} from "@/context/GlobalState.jsx";
import {SetInitialize, SetIsError} from "@/context/Features/Actions.js";
import {ActionsApi} from "@/Services/Actions/ActionsApi.js";

export const useGetInitialize = () => {

  const context = useGlobalContext()

  const dispatch = context?.dispatch
  const getInitialize = async () => {

    try {

      const response = await ActionsApi.GetInitialize()
      if (response.status === 200) {
        console.log(response.data)
        dispatch(SetInitialize(response?.data))
      } else {
        throw new Error(response?.data?.message )
      }
    } catch (error) {
      console.log(error?.response?.data?.message)
      dispatch(SetIsError({error : error?.response?.data?.message, isError :true
    }));
    }
  }
  return { getInitialize }
}
