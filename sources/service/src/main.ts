import { NestFactory } from '@nestjs/core'
import { MicroserviceOptions } from '@nestjs/microservices'
import { microserviceServerOptions } from '@sessions/proto'
import { ServiceModule } from './service-module'

const main = async () => {
    const app = await NestFactory.createMicroservice<MicroserviceOptions>(
        ServiceModule,
        microserviceServerOptions,
    )
    await app.listenAsync()
}

main()
