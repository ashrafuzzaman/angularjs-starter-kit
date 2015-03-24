define(['./module'], function (module) {
    'use strict';

    var pages = [
        {
            key: '/home',
            layout: '<div class="container"><div id="header"></div><div id="body"></div><footer class="footer"><p>© Company 2014</p></footer></div>',
            widgets: [{key: 'header', value: '1'}, {key: 'body', value: '2'}]
        },
        {
            key: '/about',
            layout: '<div class="container"><div id="header"></div><div id="body"></div><footer class="footer"><p>© Company 2014</p></footer></div>',
            widgets: [{key: 'header', value: '1'}, {key: 'body', value: '3'}]
        }

    ];
    module.service('pageRepository', ["$q", "$http", function ($q, $http) {

        this.getPageByRoute = function (route) {
            var deferred = $q.defer();
            setTimeout(function () {
                for (var i = 0; i < pages.length; ++i) {
                    if (pages[i].key == route) {
                        deferred.resolve(pages[i]);
                    }
                }
                deferred.resolve(pages[0]);
            }, 1000);

            return deferred.promise;
        }

    }]);
});
