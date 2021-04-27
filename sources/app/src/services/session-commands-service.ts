import { Injectable, Logger } from '@nestjs/common'
import { StartSession, DestroySession, Session, DestroyAllSessions } from '@sessions/domain'
import { SessionsRepository } from '@sessions/persistence'
import { addMonths } from 'date-fns'
import * as uuid from 'uuid'
import { generateToken } from '../helpers'

@Injectable()
export class SessionCommandsService {
    private logger = new Logger(this.constructor.name)

    public constructor(
        private readonly sessionRepository: SessionsRepository,
    ) { }

    public async startSession(command: StartSession) {
        const session = Session.create(
            uuid.v4(),
            command.userId,
            generateToken(),
            addMonths(new Date(), 1),
        )

        await this.sessionRepository.save(session)

        return session
    }

    public async destorySession(command: DestroySession) {
        console.log('destroySession', { command })
        const session = await this.sessionRepository.getSessionByToken(command.sessionToken)

        if (!session) {
            throw new Error('Session not found')
        }

        if (!session.isAlive()) {
            throw new Error('Session already dead')
        }

        session.destroy()

        await this.sessionRepository.save(session)
    }

    public async destroyAllSessions(command: DestroyAllSessions) {
        const sessions = await this.sessionRepository.getAliveSessionsByUserId(command.userId)

        sessions.forEach((session) => session.destroy())

        for (const session of sessions) {
            await this.sessionRepository.save(session)
        }
    }
}
