import { Module } from '@nestjs/common'
import { ApplicationModule } from '@sessions/app'
import { Bus } from '@nest-ddd/bus-rabbitmq'
import { SessionCommandsController, SessionQueriesController } from './controllers'

@Module({
    imports: [
        ApplicationModule,
        Bus.register({
            connectionString: 'amqp://local:password@rabbitmq:5672/?heartbeat=30',
            queueName: 'sessions-service-queue',
        })
    ],
    controllers: [SessionCommandsController, SessionQueriesController],
})
export class ServiceModule { }
