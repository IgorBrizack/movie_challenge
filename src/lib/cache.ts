import IORedis from 'ioredis';

const redis = new IORedis({
  host: '172.18.0.3',
  port: 6379,
  password: process.env.REDIS_PASSWORD,
});

export default redis;
