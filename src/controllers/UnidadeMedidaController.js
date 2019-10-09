const UnidadeMedida = require('../models/UnidadeMedida');

module.exports = {
    async all (req, res) {
        return res.json(await UnidadeMedida.find().sort('-createdAt'));
    },

    async create (req, res) {
        const { sigla, descricao } = req.body;

        const insert = await UnidadeMedida.create({
            sigla, descricao
        });

        return res.json(insert);
    },

    async update (req, res) {
        const unidadeMedida = await UnidadeMedida.findById(req.params.id);

        const { sigla, descricao } = req.body;
        
        Object.assign(unidadeMedida, {
            sigla, descricao
        }).save();

        return res.json(unidadeMedida)
    },

    async delete(req, res) {
        await UnidadeMedida.findById(req.params.id).remove();

        return res.json({
            'response' : 'Unidade de Medida removido'
        });
    },

    async get(req, res) {
        return res.json(await UnidadeMedida.findById(req.params.id));
    }
}