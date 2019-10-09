const mongoose = require('mongoose');

const UnidadeMedidaSchema = new mongoose.Schema({
    sigla: String,
    descricao: String
}, {
    timestamps: true
});

module.exports = mongoose.model('UnidadeMedida', UnidadeMedidaSchema);