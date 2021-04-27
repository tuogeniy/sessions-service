import path from 'path'

export const TYPEORM_ENTITIES_GLOB = path.join(__dirname, 'entities/*.ts')
export const TYPEORM_MIGRATIONS_GLOB = path.join(__dirname, 'migrations/*.ts')

console.log(TYPEORM_MIGRATIONS_GLOB)