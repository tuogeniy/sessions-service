import { MicroserviceOptions, Transport, ClientProviderOptions } from '@nestjs/microservices'
import path from 'path'
import { SESSIONS_PACKAGE_TOKEN } from './symbols'

export const SESSIONS_PACKAGE_PROTO_PATH = path.join(__dirname, './proto/sessions.proto')
export const SESSIONS_PACKAGE_NAME = 'sessions'

export const SESSIONS_SERVICE_NAME = 'SessionsService'

export const microserviceServerOptions: MicroserviceOptions = {
    transport: Transport.GRPC,
    options: {
        package: SESSIONS_PACKAGE_NAME,
        protoPath: SESSIONS_PACKAGE_PROTO_PATH,
        url: process.env.SESSIONS_SERVICE_URL,
    },
}

export const microserviceClientOptions: ClientProviderOptions = {
    name: SESSIONS_PACKAGE_TOKEN,
    transport: Transport.GRPC,
    options: {
        url: process.env.SESSIONS_SERVICE_URL,
        package: SESSIONS_PACKAGE_NAME,
        protoPath: SESSIONS_PACKAGE_PROTO_PATH,
    },
}
