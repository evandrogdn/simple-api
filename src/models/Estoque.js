const mongoose = require('mongoose');

const EstoqueSchema = new mongoose.Schema({
    produtoID: String,
    quantidade: Number,
    ativo: Boolean
}, {
    timestamps: true
});

module.exports = mongoose.model('Estoque', EstoqueSchema);