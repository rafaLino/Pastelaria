(function () {
    angular.module('pastelaria')
        .controller('UsuarioCreateController', UsuarioCreateController);

    UsuarioCreateController.$inject = ['$scope', '$state', '$stateParams', 'UsuariosService', '$timeout'];

    function UsuarioCreateController($scope, $state, $stateParams, UsuariosService, $timeout) {
        var vm = this;

        vm.titulo = "";
        vm.estado = "";

        vm.estados = {
            inserir: 1,
            editar: 2
        };
        vm.salvar = salvar;

        init();

        function init() {
            verificarEstadoTela($stateParams.id)
        }

        function verificarEstadoTela(id) {
            if (id) {
                //edit
                getUsuario(id);
                vm.estado = vm.estados.editar;
                vm.titulo = "Editar Cliente";
            } else {
                novoUsuario();
                vm.estado = vm.estados.inserir;
                vm.titulo = "Inserir Cliente";
            }
        }

        function novoUsuario() {
            vm.usuario = {
                id: 0,
                status: true
            };
        }

        function getUsuario(id) {
            UsuariosService.get(id)
                .then(function (result) {
                    vm.usuario = result.data;
                })
                .catch(function (error) {
                    console.log(error);
                })
        }

        function salvar(usuario, clean) {
            var acao = vm.estado == vm.estados.inserir ? insertUsuario : updateUsuario;
            return acao(usuario, clean);
        }

        function insertUsuario(cliente, clean) {
            UsuariosService.post(cliente)
                .then(function () {
                    if (clean) {
                        showAlert(cliente.nome + " foi inserido com sucesso");
                        delete vm.usuario;
                        $scope.userForm.$setUntouched();
                    } else {
                        $state.go('usuarios');
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        }

        function updateUsuario(cliente) {
            UsuariosService.put(cliente.id, cliente)
                .then(function () {
                    showAlert(cliente.nome + " foi editado com sucesso");

                })
                .catch(function (error) {
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