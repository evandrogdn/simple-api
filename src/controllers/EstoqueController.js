const Estoque = require('../models/Estoque');

module.exports = {
    async all (req, res) {
        return res.json(await Estoque.find().sort('-createdAt'));
    },

    async create (req, res) {
        const { produtoID, quantidade, ativo } = req.body;

        const insert = await Estoque.create({
            produtoID, quantidade, ativo
        });

        return res.json(insert);
    },

    async update (req, res) {
        const estoque = await Estoque.findById(req.params.id);

        const { produtoID, quantidade, ativo } = req.body;
        
        Object.assign(estoque, {
            produtoID, quantidade, ativo
        }).save();

        return res.json(estoque)
    },

    async delete(req, res) {
        await Estoque.findById(req.params.id).remove();

        return res.json({
            'response' : 'Estoque removido'
        });
    },

    async get(req, res) {
        return res.json(await Estoque.findById(req.params.id));
    }
}