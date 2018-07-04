(function () {
    angular.module("pastelaria")
        .controller("pedidosCreateController", pedidosCreateController);

    pedidosCreateController.$inject = ['$scope', '$state','$stateParams', 'PedidoService', 'ProdutoService'];

    function pedidosCreateController($scope, $state, $stateParams, PedidoService, ProdutoService) {
        var vm = this;
        vm.produtos = [];
        vm.salvar = salvar;
        vm.pedido = {};
        init();

        function init() {
            getAllProdutos();
            vm.pedido.clienteId = $stateParams.id;
        }

        function getAllProdutos() {
            ProdutoService.getAll()
                .then(function (result) {
                    vm.produtos = result.data;
                })
                .catch(function (error) {
                    console.log(error);
                })

        }

        function salvar() {

        }
    }
})();