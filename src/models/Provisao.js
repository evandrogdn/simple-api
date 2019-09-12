const mongoose = require('mongoose');

const ProvisaoSchema = new mongoose.Schema({
    produtoID: String,
    estoqueMinimo: Number,
    estoqueMaximo: Number,
    provisaoAtiva: Boolean
}, {
    timestamps: true
});

module.exports = mongoose.model('Provisao', ProvisaoSchema);