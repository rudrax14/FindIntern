const dotenv = require('dotenv')
dotenv.config({ path: './.env' });
const { createClient } = require('redis');
const runRedisServer = async () => {
    const client = createClient({
        password: process.env.REDIS_PASSWORD,
        socket: {
            host: process.env.REDIS_HOSTNAME,
            port: process.env.REDIS_PORT
        }
    });


    client.on('error', err => console.log('Redis Client Error', err));

    return client;
}

module.exports = runRedisServer;