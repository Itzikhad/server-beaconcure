/**
 * server.js
 *
 * This file is the entry point of the server. It creates an instance of the `App` class
 * and starts the server on a specified port.
 */

import App from './app.js';

const port = 5000;
const app = new App();

app.start(port);