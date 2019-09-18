const Fornecedor = require('../models/Fornecedor');

module.exports = {
    async all(req, res) {
        return res.json(await Fornecedor.find().sort('-createdAt'));
    },

    async create(req, res) {
        const { nome, nomeFantasia, inscrFederal, logradouro, bairro, cidade, numero, complemento, telefone, email } = req.body;

        const insert = Fornecedor.create({
            nome, nomeFantasia, inscrFederal, logradouro, bairro, cidade, numero, complemento, telefone, email
        });

        return res.json(insert);
    },

    async update(req, res) {
        const fornecedor = await Fornecedor.findById(req.params.id);

        const { nome, nomeFantasia, inscrFederal, logradouro, bairro, cidade, numero, complemento, telefone, email } = req.body;

        Object.assign(fornecedor, { nome, nomeFantasia, inscrFederal, logradouro, bairro, cidade, numero, complemento, telefone, email }).save();

        return res.json(fornecedor);
    },

    async delete(req, res) {
        await Fornecedor.findById(req.params.id).remove();

        return res.json({'response': 'Forncedor removido'});
    },

    async get(req, res) {
        return res.json(await Fornecedor.findById(req.params.id));
    }
}