import { Entity, Column } from "typeorm"

@Entity()
export class Tercero {
    @Column()
    descripcion_moneda: string | undefined

    @Column()
    descripcion_centro_costo: string | undefined

    @Column()
    tercero: string | undefined

    @Column()
    nombre: string | undefined

    @Column()
    descripcion_departamento: string | undefined

    @Column()
    telefonos: string | undefined

    @Column()
    estado: string | undefined

    @Column()
    descripcion_vendedor: string | undefined

    @Column()
    descripcion_zona: string | undefined

    @Column()
    tipo_documento: number | undefined

    @Column()
    sinonimo: string | undefined

    @Column()
    documento: string | undefined

    @Column()
    fecha: string | undefined

    @Column()
    vence: string | undefined

    @Column()
    neto: number | undefined

    @Column()
    descripcion_municipio: string | undefined

    @Column()
    direccion: string | undefined

    @Column()
    referencia: string | undefined

    @Column()
    abonado: number | undefined

    @Column()
    edad: number | undefined

    @Column()
    documentos_requeridos: string | undefined

    @Column()
    documento_id: number | undefined

    @Column()
    edad_30: number | undefined

    @Column()
    saldo: number | undefined

    @Column()
    saldo_a_tasa_cambio_documento: number | undefined

    @Column()
    saldo_a_ultima_tasa_cambio: number | undefined
}
