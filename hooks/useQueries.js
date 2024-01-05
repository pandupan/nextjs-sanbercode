/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect } from 'react'
import { useState } from 'react'

export const useQueries = ({prefixUrl = '', headers = {}} = {}) => {
    const [data, setData] = useState({
        data: null,
        isLoading: true,
        isError: null
    })


    const fetchingData = useCallback(async ({url = '', method = 'GET', headers = {}} = {}) => {
        console.log("headers =>", headers)
        setData({
            ...data,
            isLoading: true,
        })

        try {
            const response = await fetch(url, { method, headers } )
            const result = await response.json()

            setData({
                ...data,
                data: result,
                isLoading: false,
            })
        } catch (error) {
            setData({
                ...data,
                isLoading: false,
                isError: error
            })
        }
    }, [])

    useEffect(() => {
        if(prefixUrl){
            fetchingData({url: `${prefixUrl}`, headers : headers})
        }
    },[])

    return {...data};
}