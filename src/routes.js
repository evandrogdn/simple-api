const { Router } = require('express');

const EstoqueController = require('./controllers/EstoqueController');
const ForncedorController = require('./controllers/ForncedorController');
const ProdutoController = require('./controllers/ProdutoController');
const ProvisaoController = require('./controllers/ProvisaoController');

class Routes {
    constructor() {
        this.routes = new Router();

        this.loadRotasEstoque();
        this.loadRotasFornecedor();
        this.loadRotasProduto();
        this.loadRotasProvisao();
    }

    loadRotasEstoque() {
        this.routes.get('/api/estoque', EstoqueController.all);
        this.routes.get('/api/estoque/:id', EstoqueController.get)
        this.routes.post('/api/estoque', EstoqueController.create);
        this.routes.put('/api/estoque/:id', EstoqueController.update);
        this.routes.delete('/api/estoque/:id', EstoqueController.delete);
    }

    loadRotasFornecedor() {
        this.routes.get('/api/fornecedor', ForncedorController.all);
        this.routes.get('/api/fornecedor/:id', ForncedorController.get);
        this.routes.post('/api/fornecedor', ForncedorController.create);
        this.routes.put('/api/fornecedor/:id', ForncedorController.update);
        this.routes.delete('/api/fornecedor/:id', ForncedorController.delete);
    }

    loadRotasProduto() {
        this.routes.get('/api/produto', ProdutoController.all);
        this.routes.get('/api/produto/:id', ProdutoController.get);
        this.routes.post('/api/produto', ProdutoController.create);
        this.routes.put('/api/produto/:id', ProdutoController.update);
        this.routes.delete('/api/produto/:id', ProdutoController.delete);
    }

    loadRotasProvisao() {
        this.routes.get('/api/provisao', ProvisaoController.all);
        this.routes.get('/api/provisao/:id', ProvisaoController.get);
        this.routes.post('/api/provisao', ProvisaoController.create);
        this.routes.put('/api/provisao/:id', ProvisaoController.update);
        this.routes.delete('/api/provisao/:id', ProvisaoController.delete);
    }
}

module.exports = new Routes().routes;