import App from './app';
import { TLS_ENABLE, PORT } from './config';
import http, { Server as HttpServer } from 'http';
import https, { Server as HttpsServer } from 'https';

const app = new App();

let server: HttpServer | HttpsServer;
if (TLS_ENABLE == 'true') {
  const options = {
    port: PORT,
    tls: {}
  };

  server = https.createServer(options.tls, app.getServer());
} else {
  server = http.createServer(app.getServer());
}

app.listen(server);

console.log(`Worker ${process.pid} started`);

export default app;
