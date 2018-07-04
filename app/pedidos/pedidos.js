(function () {
    angular.module("pastelaria")
        .controller('pedidosController', pedidosController);

    pedidosController.$inject = ['$scope', '$state', 'PedidoService'];
    function pedidosController($scope, $state, PedidoService) {
        var vm = this;
        vm.pedidos = [];
        vm.criterioDeOrdenacao = "";
        vm.ordenarPor = ordenarPor;
        init();


        function init() {
            getAllPedido();
        }


        function getAllPedido() {
            PedidoService.getAll()
                .then(function (result) {
                    vm.pedidos = result.data;
                })
                .catch(function (error) {
                    console.log(error);
                });
        }

        function ordenarPor(campo) {
            vm.criterioDeOrdenacao = campo;
            vm.direcaoDaOrdenacao = !vm.direcaoDaOrdenacao;

        }
    }



})();