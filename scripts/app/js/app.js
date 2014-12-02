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

    angular.module('agileApp').controller('KanbanCtrl', ['$scope', function ($scope) {
        $scope.sprints = [
            new mod.Sprint(),
            new mod.Sprint(),
            new mod.Sprint()
        ];
    }]);
}(Agile));