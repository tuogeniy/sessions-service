import { Injectable } from '@nestjs/common'
import { WriteRepository } from '@node-ts/ddd'
import { Connection, LessThan } from 'typeorm'
import { InjectConnection } from '@nestjs/typeorm'
import { LOGGER_SYMBOLS, LoggerFactory } from '@node-ts/logger-core'
import { NestDDDContainer } from '@nest-ddd/bus-rabbitmq'
import { BUS_SYMBOLS, Bus } from '@node-ts/bus-core'
import { Session } from '@sessions/domain'
import { Session as SessionWriteModel } from '../entities'

@Injectable()
export class SessionsRepository extends WriteRepository<Session, SessionWriteModel> {
    constructor(
        @InjectConnection()
        databaseConnection: Connection,
        container: NestDDDContainer,
    ) {
        super(
            Session,
            SessionWriteModel,
            databaseConnection,
            container.get<Bus>(BUS_SYMBOLS.Bus),
            container.get<LoggerFactory>(LOGGER_SYMBOLS.LoggerFactory).build('UsersService', container),
        )
    }

    public async getSessionByToken(token: string) {
        const session = await this.repository.findOne({
            where: {
                token,
            },
        })

        if (!session) {
            return null
        }

        return this.toAggregateRoot(session)
    }

    public async getAliveSessionsByUserId(userId: string) {
        const sessions = await this.repository.find({
            where: [
                {
                    userId,
                    destroyed: false,
                },
                {
                    userId,
                    expiresAt: LessThan(new Date()),
                },
            ],
        })

        return sessions.map(session => this.toAggregateRoot(session))
    }
}
