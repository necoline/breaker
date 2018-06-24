const Hapi = require('hapi');
const Wreck = require('wreck');

const server = new Hapi.Server({
  host: '0.0.0.0',
  port: 8000,
  routes: { cors: { origin: ['http://localhost:8080'] } },
});

const PODCAST = 'https://api.breaker.audio/shows/185226/episodes/29314799';

const startServer = async function() {
  try {
    await server.register({ plugin: require('h2o2') });
    await server.start();

    console.log(`Server started at:  ${server.info.uri}`);
  } catch (e) {
    console.log('Failed to load h2o2');
  }
};

startServer();

server.route({
  method: 'GET',
  path: '/stuff',
  handler: {
    proxy: {
      mapUri: req => {
        req.uri = PODCAST;
        req.headers = { 'User-Agent': 'Breaker/1.0.0 (0)' };

        return req;
      },
    },
  },
});
