import { Command } from '@node-ts/bus-messages'

export class StartSession extends Command {
    $name = 'app/session/start-session'
    $version = 0

    public constructor(
        public userId: string,
    ) {
        super()
    }
}
