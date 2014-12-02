var Agile = Agile || {};

(function (mod) {
    mod.Sprint = function (data) {
        var self = this;

        data = data || { };

        self.start = data.start || '*';
        self.end = data.end || '*';
        self.get_cards = data.get_cards || null;
    };
}(Agile));

(function () {
    'use strict';

    angular.module('agileApp', [])
           .value('version', '0.0.1');
}());

(function (mod) {
    'use strict';

    angular.module('agileApp').controller('KanbanCtrl', ['$scope', 'sprintService', function ($scope, sprintService) {
        $scope.sprints = [];

        $scope.init = function() {
            sprintService.getAll().then(function (data) {
                for (var i = 0; i < data.length; i++) {
                    $scope.sprints.push(new mod.Sprint(item));
                }                
            });
        }

        $scope.init();
    }]);
}(Agile));