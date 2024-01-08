import Link from "next/link";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button
} from '@chakra-ui/react'
import { FaChevronDown } from "react-icons/fa";
import { useQueries } from "@/hooks/useQueries"
import Cookies from "js-cookie"
import  { useMutation } from "@/hooks/useMutation"
import { useRouter } from "next/router";
import { useContext } from "react";
import { UserContext } from "@/context/userContext";

export default function ListMenu() {
  const router = useRouter()
  const {mutate} = useMutation()
  const userData = useContext(UserContext)

  const handleLogout = async () => {
    const response = await mutate({
      url : `https://paace-f178cafcae7b.nevacloud.io/api/logout`,
      method: "GET",
      headers : {
        'Authorization' : `Bearer ${Cookies.get('user_token')}`
      }
    })

    console.log('response =>', response)

    if (!response.success){
      console.log('Gagal Logout')
    } else {
      Cookies.remove("user_token")
      router.push('/login')
    }

  }

  

  return (
    <>
      <div className="flex flex-row justify-end gap-4 text-white p-4">
        <Link href="/" className="bg-sky-800 rounded-xl px-5 py-2">
          Home
        </Link>
        <Link href="/profile" className="bg-sky-800 rounded-xl px-5 py-2">
          Profile
        </Link>
        <Link href="/users" className="bg-sky-800 rounded-xl px-5 py-2">
          User
        </Link>
        <Link href="/users/detail" className="bg-sky-800 rounded-xl px-5 py-2">
          User Detail
        </Link>
        <Link href="/notes" className="bg-sky-800 rounded-xl px-5 py-2">
          Notes
        </Link>
        <Menu>
          <MenuButton as={Button} rightIcon={<FaChevronDown />}>
            {userData?.name}
            {console.log(userData)}
          </MenuButton>
          <MenuList>
            <MenuItem onClick={()=> handleLogout()}><span className="text-black">Logout</span></MenuItem>
          </MenuList>
        </Menu>
      </div>
    </>
  );
}
