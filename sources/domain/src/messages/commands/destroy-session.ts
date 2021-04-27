import { Command } from '@node-ts/bus-messages'

export class DestroySession extends Command {
    $name = 'app/session/destroy-session'
    $version = 0

    public constructor(
        public readonly sessionToken: string,
    ) {
        super()
    }
}
