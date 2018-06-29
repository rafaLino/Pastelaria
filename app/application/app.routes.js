(function () {
    angular.module('pastelaria')
    .config(Router);

    Router.$inject = ['$stateProvider','$urlRouterProvider', '$locationProvider'];

    function Router($stateProvider, $urlRouterProvider, $locationProvider){
        
        $urlRouterProvider.otherwise('/usuarios');
        $locationProvider.hashPrefix('');
        
        
        $stateProvider.state('usuarios', {
           url:'/usuarios',
           templateUrl: 'usuarios/usuarios.html',
           controller: 'UsuariosController',
           controllerAs: 'vm' 
        });

        $stateProvider.state('inserir-usuario', {
            url:'/inserir-usuario',
            templateUrl: 'usuarios/usuarioCreate.html',
            controller: 'UsuarioCreateController',
            controllerAs: 'vm' 
         });

         $stateProvider.state('alterar-usuario', {
            url:'/alterar-usuario/:id',
            templateUrl: 'usuarios/usuarioCreate.html',
            controller: 'UsuarioCreateController',
            controllerAs: 'vm' 
         });

    }
  })();