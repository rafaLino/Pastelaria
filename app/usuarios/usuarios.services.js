(function(){
    angular.module('pastelaria')
    .factory('UsuariosService', UsuariosService);

    UsuariosService.$inject =['$http','ApiSettingsConstant'];

    function UsuariosService($http, ApiSettingsConstant){
        
        const baseUrl = ApiSettingsConstant.apiServiceBaseUrl + "Cliente";
        return {
            getAll: getAll,
            get: get,
            post: post,
            put: put,
            delet: delet
        };
        
        function getAll(){
                return $http.get(baseUrl);
        }

        function get(id){
            return $http.get(baseUrl+ "/" + id);
        }

        function post(usuario){
            return $http.post(baseUrl, usuario);
        }

        function put(id, usuario){
            return $http.put(baseUrl + "/" + id, usuario);
        }

        function delet(id){
            return $http.delete(baseUrl + "/" + id);
        }
    }

})();