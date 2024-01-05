import Layout from "@/Layout"
import {
    FormControl,
    FormLabel,
    Input,
    Button,
    useToast
  } from '@chakra-ui/react'
import { useState } from "react"
import { useMutation } from "@/hooks/useMutation"
import Cookies from "js-cookie"
import { useRouter } from "next/router"


const Login = () => {
    const router = useRouter()
    const { mutate } = useMutation()
    const toast = useToast()
    const [payload, setPayload] = useState({
        email: '',
        password: ''
    })

    const handleSubmit = async () => {
        const response = await mutate({
            url : "https://paace-f178cafcae7b.nevacloud.io/api/login",payload
        })
        console.log('response =>', response)
        if (!response?.result?.success) {
            toast({
                title: 'Login Gagal.',
                description: "Email atau Password tidak sesuai.",
                status: 'error',
                duration: 2000,
                isClosable: true,
                position: 'top'
            })
        } else {
            Cookies.set('user_token', response?.result?.data?.token,{expires : new Date(response?.result?.data?.expires_at), path : "/"})
            toast({
                title: 'Login Berhasil.',
                description: "Anda berhasil login.",
                status: 'success',
                duration: 2000,
                isClosable: true,
                position: 'top'
            })
            router.push('/')
        }
    }

  return (
    <Layout metaTitle="Profile" metaDescription={"Halaman users"}>
        <div className="w-full min-h-[100vh]">
            <div className="max-w-[500px] w-full p-4 flex flex-col justify-center items-center mx-auto min-h-auto border-2 border-blue-400 rounded-md m-4">
                <div className="text-3xl font-semibold mx-auto">Login</div>
                <FormControl>
                    <FormLabel>Email address</FormLabel>
                    <Input
                        value={payload?.email}
                        onChange={(e) => setPayload({...payload, email: e.target.value})} 
                        placeholder="email"
                        type='email' 
                    />
                </FormControl>
                <FormControl>
                    <FormLabel>Password</FormLabel>
                    <Input
                        value={payload.password}
                        onChange={(e) => setPayload({...payload, password: e.target.value})}
                        placeholder="password"
                        type='password'
                    />
                </FormControl>
                <FormControl>
                    <Button
                        onClick={() => handleSubmit()} className="mx-auto w-full my-4">Login</Button>
                </FormControl>
            </div>
        </div>
    </Layout>
  )
}

export default Login
