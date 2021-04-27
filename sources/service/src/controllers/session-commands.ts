import { Controller, Logger, UseInterceptors } from '@nestjs/common'
import { GrpcMethod, } from '@nestjs/microservices'
import { SessionCommandsService } from '@sessions/app'
import { DestroySession, StartSession, DestroyAllSessions } from '@sessions/domain'
import { SESSIONS_SERVICE_NAME } from '@sessions/proto'
import { ErrorMapperInterceptor } from '@libs/error-mapper'

@Controller()
@UseInterceptors(ErrorMapperInterceptor)
export class SessionCommandsController {
    private readonly logger = new Logger(this.constructor.name)

    public constructor(
        private readonly sessionCommandsService: SessionCommandsService,
    ) { }

    @GrpcMethod(SESSIONS_SERVICE_NAME, 'startSession')
    public async startSession(command: StartSession) {
        this.logger.debug(`execute startSession ${command}`)
        const session = await this.sessionCommandsService.startSession(command)
        return {
            success: true,
            result: {
                session,
            },
        }
    }

    @GrpcMethod(SESSIONS_SERVICE_NAME, 'destroySession')
    public async destroySession(command: DestroySession) {
        await this.sessionCommandsService.destorySession(command)
        return {
            success: true,
        }
    }

    @GrpcMethod(SESSIONS_SERVICE_NAME, 'destroyAllSessions')
    public async destroyAllSessions(command: DestroyAllSessions) {
        await this.sessionCommandsService.destroyAllSessions(command)
        return {
            success: true,
        }
    }
}
