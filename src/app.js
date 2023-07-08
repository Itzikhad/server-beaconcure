/**
 * app.js
 *
 * This file contains the App class, which is responsible for configuring the Express application
 * and defining routes.
 */

import express from 'express';
import cors from 'cors';
import filesRouter from './routes/files.js';
import logger from './utils/logger.js';


class App {
  app;

  constructor() {
    this.app = express();
    this.configureMiddleware();
    this.configureRoutes();
  }

  /**
 * Configure middleware for the Express application.
 */
  configureMiddleware() {
    this.app.use(cors());
    this.app.use(express.json());
  }

  /**
 * Configure routes for the Express application.
 */
  configureRoutes() {
    this.app.use('/api/files', filesRouter);
  }

  /**
 * Start the server and listen on the specified port.
 * @param {number} port - The port number to listen on.
 */
  start(port) {
    logger(`Server started`)
    this.app.listen(port, () => {
      logger(`Server is listening on port ${port}`)
      console.log(`Server running on port ${port}`);
    });
  }
}

export default App;
