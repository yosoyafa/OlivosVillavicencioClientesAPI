import axios from 'axios'
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
    const response = await axios.post(tokenUrl, {
        usuario: 'CRM',
        clave: 'CRMfunintegrales',
    }, {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            usuario: 'CRM',
            clave: 'CRMfunintegrales',
        }
    })

    return response.data as string
}

export const getCarteraByTercero = async (tercero: number) => {
    try {
        const token = await getToken()
        const response = await axios.get(`${tercerosUrl}/GetCarteraTerceroV2?tercero=${tercero}`, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization-Token': token,
            }
        })

        if (response.status !== 200) return {}
        return response.data
    } catch (error) {
        console.error({ error })
    }
}
