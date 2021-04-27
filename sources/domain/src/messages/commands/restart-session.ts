import { Command } from '@node-ts/bus-messages'

export class RestartSession extends Command {
    $name = 'app/session/restart-session'
    $version = 0

    public constructor(
        public readonly sessionToken: string,
    ) {
        super()
    }
}
