import { AggregateRoot } from '@node-ts/ddd'
import { SessionDestroyed, SessionStarted } from './messages'

export class Session extends AggregateRoot {
    public constructor(
        public id: string,
        public userId: string,
        public token: string,
        public expiresAt: Date,
        public destroyed: boolean = false,
    ) {
        super(id)
    }

    public static create(
        id: string,
        userId: string,
        token: string,
        expiresAt: Date,
    ) {
        const session = new Session(id, userId, token, expiresAt)
        return session
    }

    public destroy() {
        this.destroyed = true
    }

    public isAlive() {
        const now = Date.now()

        if (now > this.expiresAt.getTime()) {
            return false
        }

        if (this.destroyed) {
            return false
        }

        return true
    }

    protected whenSessionStarted(event: SessionStarted) { }

    protected whenSessionDestroyed(event: SessionDestroyed) { }
}
