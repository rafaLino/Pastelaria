(function () {
    angular.module("pastelaria")
        .factory("ProdutoService", ProdutoService);

    ProdutoService.$inject = ['$http', 'ApiSettingsConstant'];

    function ProdutoService($http, ApiSettingsConstant) {
        const baseUrl = ApiSettingsConstant.apiServiceBaseUrl + "Produto";
        return {
            getAll: getAll,
            get: get,
            post: post,
            put: put,
            delet: delet
        };

        function getAll() {
            return $http.get(baseUrl);
        }

        function get(id) {
            return $http.get(baseUrl + "/" + id);
        }

        function post(usuario) {
            return $http.post(baseUrl, usuario);
        }

        function put(id, usuario) {
            return $http.put(baseUrl + "/" + id, usuario);
        }

        function delet(id) {
            return $http.delete(baseUrl + "/" + id);
        }
    }
})();