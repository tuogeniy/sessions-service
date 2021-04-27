import { Injectable } from '@nestjs/common'
import { SessionsRepository } from '@sessions/persistence'
import { RestoreSession } from '@sessions/domain'

@Injectable()
export class SessionQueriesService {
    public constructor(
        private readonly sessionRepository: SessionsRepository,
    ) { }

    public async restoreSession(query: RestoreSession) {
        const session = await this.sessionRepository.getSessionByToken(query.sessionToken)

        if (!session) {
            throw new Error('Session not found')
        }

        if (!session.isAlive()) {
            throw new Error('Session is dead')
        }

        console.log({
            session,
        })

        return session
    }
}
