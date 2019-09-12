const mongoose = require('mongoose');


const ProdutoSchema = new mongoose.Schema({
    referencia: String,
    descricao: String,
    valor: Number,
    fornecedorID: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Produto', ProdutoSchema);