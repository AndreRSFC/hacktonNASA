import Observatory from "../models/Observatory";

class ObservatoryController {
    async index(req, res) {
        const observatories = await Observatory.find();

        return res.json(observatories);
    }

    async show(req, res) {
        const { id } = req.params;
        const observatory = await Observatory.findById(id);

        return res.json(observatory);
    }

    async store(req, res) {
        const { body } = req;
        const observatory = await Observatory.create(body);

        return res.json(observatory);
    }

    async update(req, res) {
        const { symbol } = req.params;
        const { body } = req;

        const observatory = await Observatory.findOneAndUpdate({ symbol }, body, {
            new: true
        });

        return res.json(observatory);
    }
}

export default new ObservatoryController();