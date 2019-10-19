
import ObservatoryLocations from "../models/ObservatoryLocations";

class ObservatoryLocationsController {
    async index(req, res) {
        const observatories = await ObservatoryLocations.find();

        return res.json(observatories);
    }

    async show(req, res) {
        const { symbol } = req.params;
        const observatory = await ObservatoryLocations.findOne(symbol);

        return res.json(observatory);
    }
}

export default new ObservatoryLocationsController();