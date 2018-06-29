(function(){
    angular.module('pastelaria')
    .constant('ApiSettingsConstant', ApiSettingsConstant())

    function ApiSettingsConstant(){
        return {
            apiServiceBaseUrl:"http://localhost:61012/api/"
        }
    }
})();