import fetch from 'node-fetch'
import { RequestInit } from 'node-fetch'

const tokenUrl =
    'https://erp.karing.com.co/900679170/Api/LoginAPI/Authenticate/'
const tercerosUrl = 'https://erp.karing.com.co/900679170/Api/DocumentosApi'

const requestOptions: RequestInit = {
    method: 'POST',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        usuario: 'CRM',
        clave: 'CRMfunintegrales',
    },
}

export const getToken = async () => {
    const response = await fetch(tokenUrl, requestOptions)
    const token = await response.json()
    return token
}

export const getCarteraByTercero = async (tercero: number) => {
    try {
        const token = await getToken()
        const response = await fetch(
            `${tercerosUrl}/GetCarteraTerceroV2?tercero=${tercero}`,
            {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization-Token': token,
                },
            }
        )
        if (response.status !== 200) return {}
        const cartera = await response.json()
        return cartera
    } catch (error) {
        console.error({ error })
    }
}
