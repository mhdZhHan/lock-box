const serverConfig = {
    ip: 'localhost',
    port: process.env.PORT || 3000
}

const mongoConfig = {
    connectionUrl: process.env.DATABASE_URL,
    database_name: process.env.DATABASE_NAME,
}

export { serverConfig, mongoConfig }
