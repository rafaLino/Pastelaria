(function () {
  angular.module('pastelaria')
    .controller('UsuariosController', UsuariosController);

  UsuariosController.$inject = ['$scope', '$state', 'UsuariosService'];

  function UsuariosController($scope, $state, UsuariosService) {
    var vm = this;
    vm.clientes = [];
    vm.criterioDeOrdenacao = "";
    vm.ordenarPor = ordenarPor;
    vm.excluir = excluir;
    vm.editar = editar;
    vm.fazerPedido = fazerPedido

    init();

    function init() {
      getAllUsuarios();
    }

    function getAllUsuarios() {
      UsuariosService.getAll()
        .then(function (result) {
          vm.clientes = result.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    function ordenarPor(campo) {
      vm.criterioDeOrdenacao = campo;
      vm.direcaoDaOrdenacao = !vm.direcaoDaOrdenacao;

    }

    function excluir(idUsuario) {
      if (confirm("Tem Certeza que deseja excluir esse usuário?")) {
        UsuariosService.delet(idUsuario)
          .then(function () {
            getAllUsuarios();
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    }

    function editar(id) {
      $state.go("alterar-usuario", { "id": id });
    }

    function fazerPedido(id) {
      $state.go("inserir-pedido", { "id": id });
    }
  }
})();