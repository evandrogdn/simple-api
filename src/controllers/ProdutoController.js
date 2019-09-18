const Produto = require('../models/Produto');

module.exports = {
    async all (req, res) {
        return res.json(await Produto.find().sort('-createdAt'))
    },

    async create(req, res) {
        const { referencia, descricao, valor, fornecedorID } = req.body;

        const insert = Produto.create({ referencia, descricao, valor, fornecedorID });

        return res.json(insert);
    },

    async update (req, res) {
        const produto = await Produto.findById(req.params.id);

        const { referencia, descricao, valor, fornecedorID } = req.body;

        Object.assign(produto, { referencia, descricao, valor, fornecedorID }).save();

        return res.json(produto);
    },

    async delete (req, res) {
        await Produto.findById(req.params.id);

        return res.json({'response': 'Produto removido'});
    },

    async get (req, res) {
        return res.json(await Produto.findById(req.params.id));
    }
}