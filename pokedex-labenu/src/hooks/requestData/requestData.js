import { useState, useEffect } from 'react'
import axios from 'axios'


export const useRequestData = (url) => {
    const [data, setData] = useState(undefined)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")

    useEffect(() => {
        setIsLoading(true)
        axios.get(url)
            .then((response) => {
                setData(response.data)
                setIsLoading(false)
            }).catch((error) => {
                setError(error)
                setIsLoading(false)
            })
    }, [])

    return [data, isLoading, error]
}
