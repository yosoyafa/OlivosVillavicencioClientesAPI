import { Entity } from "typeorm"

@Entity()
export class Tercero {
    descripcion_moneda: string | undefined
    descripcion_centro_costo: string | undefined
    tercero: string | undefined
    nombre: string | undefined
    descripcion_departamento: string | undefined
    telefonos: string | undefined
    estado: string | undefined
    descripcion_vendedor: string | undefined
    descripcion_zona: string | undefined
    tipo_documento: number | undefined
    sinonimo: string | undefined
    documento: string | undefined
    fecha: string | undefined
    vence: string | undefined
    neto: number | undefined
    descripcion_municipio: string | undefined
    direccion: string | undefined
    referencia: string | undefined
    abonado: number | undefined
    edad: number | undefined
    documentos_requeridos: string | undefined
    documento_id: number | undefined
    edad_30: number | undefined
    saldo: number | undefined
    saldo_a_tasa_cambio_documento: number | undefined
    saldo_a_ultima_tasa_cambio: number | undefined
}
