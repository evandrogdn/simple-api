const mongoose = require('mongoose');


const FornecedorSchema = new mongoose.Schema({
    nome : String,
    nomeFantasia: String,
    inscrFederal: String,
    logradouro: String,
    bairro: String,
    cidade: String,
    numero: Number,
    complemento: {
        type: String,
        required: false
    },
    telefone: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: false
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Fornecedor', FornecedorSchema)