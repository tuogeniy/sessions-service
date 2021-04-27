import { TypeOrmModuleOptions } from '@nestjs/typeorm'
import { TYPEORM_ENTITIES_GLOB, TYPEORM_MIGRATIONS_GLOB } from '../constants'

export const typeormModuleOptions: TypeOrmModuleOptions = {
    type: 'postgres',
    migrationsRun: true,
    synchronize: false,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
    host: process.env.POSTGRES_HOST,
    username: process.env.POSTGRES_USER,
    port: Number(process.env.POSTGRES_PORT),
    migrations: [TYPEORM_MIGRATIONS_GLOB],
    entities: [TYPEORM_ENTITIES_GLOB],
    cli: {
        migrationsDir: TYPEORM_MIGRATIONS_GLOB,
    }
}
