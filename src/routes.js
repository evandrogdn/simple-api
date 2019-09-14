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
        this.routes.get('/estoque', EstoqueController.all);
        this.routes.get('/estoque/:id', EstoqueController.get)
        this.routes.post('/estoque', EstoqueController.create);
        this.routes.put('/estoque/:id', EstoqueController.update);
        this.routes.delete('/estoque/:id', EstoqueController.delete);
    }

    loadRotasFornecedor() {
        this.routes.get('/fornecedor', ForncedorController.all);
        this.routes.get('/fornecedor/:id', ForncedorController.get);
        this.routes.post('/fornecedor', ForncedorController.create);
        this.routes.put('/fornecedor/:id', ForncedorController.update);
        this.routes.delete('/fornecedor/:id', ForncedorController.delete);
    }

    loadRotasProduto() {
        this.routes.get('/produto', ProdutoController.all);
        this.routes.get('/produto/:id', ProdutoController.get);
        this.routes.post('/produto', ProdutoController.create);
        this.routes.put('/produto/:id', ProdutoController.update);
        this.routes.delete('/produto/:id', ProdutoController.delete);
    }

    loadRotasProvisao() {
        this.routes.get('/provisao', ProvisaoController.all);
        this.routes.get('/provisao/:id', ProvisaoController.get);
        this.routes.post('/provisao', ProvisaoController.create);
        this.routes.put('/provisao/:id', ProvisaoController.update);
        this.routes.delete('/provisao/:id', ProvisaoController.delete);
    }
}

module.exports = new Routes().routes;