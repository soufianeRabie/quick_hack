import * as z from "zod"
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {useNavigate} from "react-router-dom";
import {Loader} from "lucide-react";
import {toast} from "sonner";
import {useGlobalContext} from "@/context/GlobalState.jsx";
import {SetIsError, SetUserAction} from "@/context/Features/Actions.js";
import {deleteToken, isTokenExist, TOKEN_NAME} from "@/Library/index.jsx";
import {useEffect, useState} from "react";
import {ActionsApi} from "@/Services/Actions/ActionsApi.js";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form.jsx";
import {Input} from "@/components/ui/input.jsx";
import {Button} from "@/components/ui/button.jsx";

const formSchema = z.object({
    email: z.string().email().min(2).max(30),
    password: z.string().min(3).max(30)
})
export default function UserLogin() {
    const navigate = useNavigate()
    const { dispatch} = useGlobalContext()
    const [isLoading, setIsLoading] = useState(true);
    const form = useForm({
        resolver: zodResolver(formSchema , ),defaultValues:{
            email : '',
            password : ''
        }
    },)
    const {setError, formState: {isSubmitting}} = form


    useEffect(() => {
        if(isTokenExist())
        {
            try {
                navigate('/')
            }catch (e)
            {
                deleteToken()
                setIsLoading(false)
            }
        }else
        {
            setIsLoading(false)
        }

    }, []);

    if(isLoading)
    {
        return <></>
    }
    // 2. Define a submit handler.
    const onSubmit = async values => {

        const loading = toast.loading('login in progress...')
        try {
            await ActionsApi.login({email:values.email, password:values.password}).then(
                ({status, data}) => {
                    if (status === 200 && data) {
                        localStorage.setItem(TOKEN_NAME ,data?.token)
                        dispatch(SetUserAction({user : data.user}))
                        dispatch(SetIsError({error : null, isError :false
                        }));
                        navigate('/');
                    }else
                    {
                        throw new Error('something went wrong')
                    }
                }).catch(({response}) => {
                setError('email', {
                    message: response.data.error || response?.data?.errors?.email?.join()
                })
            })
        }catch (e)
        {
            setError('email' , {
                message : e?.error?.message
            })
        }

        toast.dismiss(loading)
    }

    return<>

        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 p-4 bg-white rounded-lg shadow-md">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="Email" {...field} className="input-field text-sm p-2" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input type="password" placeholder="Password" {...field} className="input-field text-sm p-2" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button className="mt-4 btn-primary w-full" disabled={isSubmitting} type="submit">
                    {isSubmitting && <Loader className="mx-2 my-2 animate-spin" />} Login
                </Button>
            </form>
        </Form>
        <div className="mt-4 text-center">
        </div>
    </>
}
