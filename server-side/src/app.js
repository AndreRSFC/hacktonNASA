import express from "express";
import cors from 'cors';
import mongoose from "mongoose";
import processLocation from '../lib/locations';

import * as cron from "node-cron";

import routes from "./routes";
import databaseConfig from "./config/database";

class App {
  constructor() {
    this.express = express();

    this.database();
    this.middlewares();
    this.routes();
    this.cronJob();
  }

  database() {
    mongoose.connect(databaseConfig.uri, {
      useCreateIndex: true,
      useNewUrlParser: true
    });
  }

  middlewares() {
    this.express.use(cors());
    this.express.use(express.json());
  }

  async cronJob() {
    cron.schedule("0 0 * 1 5", async () => {
      await processLocation();
    });
  }

  routes() {
    this.express.use(routes);
  }
}

export default new App().express;
