import { Controller, UseInterceptors } from '@nestjs/common'
import { GrpcMethod } from '@nestjs/microservices'
import { SessionQueriesService } from '@sessions/app'
import { RestoreSession } from '@sessions/domain'
import { ErrorMapperInterceptor } from '@libs/error-mapper'

@Controller()
@UseInterceptors(ErrorMapperInterceptor)
export class SessionQueriesController {
    public constructor(
        private readonly sessionQueriesService: SessionQueriesService,
    ) { }

    @GrpcMethod('SessionsService', 'restoreSession')
    public async restoreSession(query: RestoreSession) {
        const session = await this.sessionQueriesService.restoreSession(query)

        return {
            success: true,
            result: {
                session,
            },
        }
    }
}
