import Layout from "@/Layout"
import { useRouter } from "next/router"

export default function UsersByName() {
    const router = useRouter()
    const { id } = router?.query


    return (
        <Layout metaTitle="User id" metaDescription={"Ini adalah bagian usee id"}>
            <h1>Users {id}</h1>
        </Layout>
    )
}