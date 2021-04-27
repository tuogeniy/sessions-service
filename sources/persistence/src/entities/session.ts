import { WriteModel } from '@node-ts/ddd'
import { Column, Entity, PrimaryColumn, UpdateDateColumn, CreateDateColumn } from 'typeorm'

@Entity()
export class Session extends WriteModel {
    @PrimaryColumn('uuid')
    public id!: string

    @Column()
    public userId!: string

    @Column('boolean')
    public destroyed!: boolean

    @Column()
    public token!: string

    @Column('timestamptz')
    public expiresAt!: Date

    @CreateDateColumn()
    public createdAt!: Date

    @UpdateDateColumn()
    public updatedAt!: Date
}
