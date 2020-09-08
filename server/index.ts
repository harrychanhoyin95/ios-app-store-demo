import Express from './config/express';
import Cron from './config/cron';
import config from './config/index';

const ExpressServer = new Express();
const CronJob = new Cron;
const portNumber = process.env.PORT || config.port

ExpressServer.init();
CronJob.tenMinutes();

ExpressServer.httpServer.listen(portNumber, () => {
  console.log(`🚀 Server started at PORT ${portNumber} `)
  console.log(
    `🚀 Server ready at http://localhost:${portNumber}${ExpressServer.server.graphqlPath}`
  );
  console.log(
    `🚀 Subscriptions ready at ws://localhost:${portNumber}${ExpressServer.server.subscriptionsPath}`
  );
})
