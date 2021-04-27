import { Event } from '@node-ts/bus-messages'

export class SessionStarted extends Event {
    $name = 'app/session/session-started'
    $version = 0

    public constructor() {
        super()
    }
}
