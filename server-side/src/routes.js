import { Router } from "express";

import ObservatoryController from './app/controller/ObservatoryController';

import ObservatoryLocationsController from './app/controller/ObservatoryLocationsController';

const routes = Router();

routes.get("/", (req, res) => {
    return res.json({message: 'Hello Nasa'});
});

routes.get("/observatories", ObservatoryController.index);
routes.get("/observatories/:symbol", ObservatoryController.show);
routes.post("/observatories", ObservatoryController.store);
routes.put("/observatories/:symbol", ObservatoryController.update);

routes.get("/locations", ObservatoryLocationsController.index);
routes.get("/locations/:id", ObservatoryLocationsController.show);


export default routes;