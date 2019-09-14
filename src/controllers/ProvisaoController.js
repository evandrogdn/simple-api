const Provisao = require('../models/Provisao');

module.exports = {
    async all (req, res) {
        res.json(await Provisao.find().sort('-createdAt'));
    },

    async create (req, res) {
        const { estoqueID, estoqueMinimo, estoqueMaximo, provisaoAtiva } = req.body;

        const insert = await Provisao.create({ estoqueID, estoqueMinimo, estoqueMaximo, provisaoAtiva });

        return res.json(insert);
    },

    async update (req, res) {
        const provisao = await Provisao.findById(req.params.id);

        const { estoqueID, estoqueMinimo, estoqueMaximo, provisaoAtiva } = req.body;

        Object.assign(provisao, { estoqueID, estoqueMinimo, estoqueMaximo, provisaoAtiva });

        return res.json(provisao);
    },

    async delete (req, res) {
        await Provisao.findById(req.params.id).remove();

        return res.json({'response': 'Provisão removida'});
    },

    async get (req, res) {
        return res.json(await Provisao.findById(req.params.id));
    }
}