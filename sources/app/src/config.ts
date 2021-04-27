if (!process.env.SESSION_SECRET) {
    throw new Error('You must provide SESSION_SECRET')
}

export const SESSION_SECRET = process.env.SESSION_SECRET
export const SESSION_LENGTH_BYTES = 64
export const SESSION_CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
