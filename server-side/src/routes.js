import { Router } from "express";

import ObervatoryController from './app/controller/ObservatoryController';

const routes = Router();

routes.get("/", (req, res) => {
    return res.json({message: 'Hello Nasa'});
});

routes.get("/observatories", ObervatoryController.index);
routes.get("/observatories/:id", ObervatoryController.show);
routes.post("/observatories", ObervatoryController.store);
routes.put("/observatories/:name", ObervatoryController.update);


export default routes;