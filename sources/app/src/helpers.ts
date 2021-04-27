import metautil from 'metautil'
import { SESSION_CHARACTERS, SESSION_SECRET, SESSION_LENGTH_BYTES } from './config'

export const generateToken = () => metautil.generateToken(
    SESSION_SECRET,
    SESSION_CHARACTERS,
    SESSION_LENGTH_BYTES,
)
