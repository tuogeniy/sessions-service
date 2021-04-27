import { Command } from '@node-ts/bus-messages'

export class DestroyAllSessions extends Command {
    $name = 'app/session/destroy-all-sessions'
    $version = 0

    public constructor(
        public readonly userId: string,
    ) {
        super()
    }
}
