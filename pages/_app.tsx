import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { UserContextProvider } from '@/context/userContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <UserContextProvider>
        <Component {...pageProps} />
      </UserContextProvider>
    </ChakraProvider>
  )
}
