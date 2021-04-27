import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { typeormModuleOptions } from './config'
import { SessionsRepository } from './repository'

@Module({
    imports: [TypeOrmModule.forRoot(typeormModuleOptions)],
    providers: [SessionsRepository],
    exports: [SessionsRepository],
})
export class PersistenceModule { }
