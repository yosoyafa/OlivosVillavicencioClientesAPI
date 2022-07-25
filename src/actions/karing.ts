import fetch from 'node-fetch'

const tokenUrl = 'https://erp.karing.com.co/900679170/Api/LoginAPI/Authenticate/'
const tercerosUrl = 'https://erp.karing.com.co/900679170/Api/DocumentosApi'

export const getToken = () => fetch(tokenUrl, {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    usuario: 'CRM',
    clave: 'CRMfunintegrales'
})
    .then((response) => response.json())
    .catch((err) => console.error(err))

export const getCarteraByTercero = ({ token, tercero }: { token: string, tercero: number }) => {
    axios.get(
        tercerosUrl + `/GetCarteraTerceroV2?tercero=${tercero}`,
        {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization-Token': token
            }
        }
    ).then((response) => response.data)
}
