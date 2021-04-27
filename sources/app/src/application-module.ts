import { Module } from '@nestjs/common'
import { PersistenceModule } from '@sessions/persistence'
import { SessionCommandsService, SessionQueriesService } from './services'

@Module({
    imports: [PersistenceModule],
    providers: [SessionCommandsService, SessionQueriesService],
    exports: [SessionCommandsService, SessionQueriesService],
})
export class ApplicationModule { }
