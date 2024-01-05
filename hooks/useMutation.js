/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect } from 'react'
import { useState } from 'react'

export const useMutation = () => {
    const [data, setData] = useState({
        data: null,
        isLoading: true,
        isError: null
    })

    const mutate = useCallback(async ({url = '', method = 'POST', payload = {}, headers = {}} = {}) => {
        setData({
            ...data,
            isLoading: true,
        })

        try {
            const response = await fetch(url, { 
                method,
                headers : {
                    "Content-Type": "application/json",
                    ...headers
                },
                ...(method !== "GET" && {body: JSON.stringify(payload)} ),
                 
            } )
            const result = await response.json()

            setData({
                ...data,
                data: result,
                isLoading: false,
            });

            return{
                result
            }
        } catch (error) {
            setData({
                ...data,
                isLoading: false,
                isError: error
            });
            return{
                error
            }
        }
    }, [])


    return {...data, mutate};
}