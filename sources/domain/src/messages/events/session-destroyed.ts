import { Event } from '@node-ts/bus-messages'

export class SessionDestroyed extends Event {
    $name = 'app/session/session-destroyed'
    $version = 0

    public constructor() {
        super()
    }
}
