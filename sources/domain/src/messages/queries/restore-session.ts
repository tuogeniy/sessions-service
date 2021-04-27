import { Message } from '@node-ts/bus-messages'

export class RestoreSession extends Message {
    $name = 'app/session/restore-session'
    $version = 0

    public constructor(
        public readonly sessionToken: string,
    ) {
        super()
    }
}
