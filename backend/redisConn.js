const { createClient } = require('redis');
const runRedisServer = async ()=>{
   const client = createClient();

client.on('error', err => console.log('Redis Client Error', err));

    return client;
}

module.exports = runRedisServer;