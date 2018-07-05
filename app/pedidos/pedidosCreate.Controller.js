(function () {
    angular.module("pastelaria")
        .controller("pedidosCreateController", pedidosCreateController);

    pedidosCreateController.$inject = ['$scope', '$state','$stateParams', 'PedidoService', 'ProdutoService', '$timeout'];

    function pedidosCreateController($scope, $state, $stateParams, PedidoService, ProdutoService, $timeout) {
        var vm = this;
        vm.produtos = [];
        vm.salvar = salvar;

        init();

        function init() {
            getAllProdutos();
            vm.pedido = {
                clienteId: $stateParams.id,
                quantidade: 1
            };

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

        function salvar(pedido) {
            PedidoService.post(pedido)
            .then(function(){
                showAlert("Pedido realizado com sucesso");
                delete vm.pedido;
                $scope.userForm.$setUntouched();
            })
            .catch(function(error){
                console.log(error);
            });
        }

        function showAlert(mensagem) {
            vm.alert = true;
            vm.mensagem = mensagem;
            $timeout(function () {
                vm.alert = false;
            }, 2000);
        }
    }
})();