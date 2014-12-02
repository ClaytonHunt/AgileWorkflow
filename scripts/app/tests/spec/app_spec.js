/* globals describe, it*/

(function (mod) {
    'use strict';

    describe('App: agileApp', function () {
        beforeEach(module('agileApp'));

        it('is version 0.0.1', inject(function (version) {
            expect(version).toBe('0.0.1');
        }));

        describe('Controller: KanbanCtrl', function () {
            var scope;
            var ctrl;

            beforeEach(inject(function ($rootScope, $controller) {
                scope = $rootScope.$new();
                ctrl = $controller('KanbanCtrl', {
                    $scope: scope
                });
            }));

            it('exists', function () {
                expect(ctrl).toBeDefined();
            });

            describe('Kanban: sprints', function () {
                it('is defined', function() {
                    expect(scope.sprints).toBeDefined();
                });

                it('is an array', function() {
                    expect(scope.sprints instanceof Array).toBeTruthy();
                });

                it('is populated on controller load', function() {
                    expect(scope.sprints.length).toBe(3);
                });

                it('is populated with sprints', function() {
                    expect(scope.sprints[0] instanceof mod.Sprint).toBeTruthy();
                });
            });
        });
    });

    describe('Agile: Sprint', function() {
        var sprint;

        beforeEach(function() {
            sprint = new mod.Sprint();
        });

        it('is defined', function() {
            expect(mod.Sprint).toBeDefined();
        });

        describe('start', function() {
            it('has start', function () {
                expect(sprint.start).toBeDefined();
            });

            it('defaults start to *', function () {
                expect(sprint.start).toBe('*');
            });

            it('populates start from data', function () {
                var s = new mod.Sprint({ start: '01/01/2014' });
                expect(s.start).toBe('01/01/2014');
            });
        });

        describe('end', function() {
            it('has end', function() {
                expect(sprint.end).toBeDefined();
            });

            it('defaults end to *', function() {
                expect(sprint.end).toBe('*');
            });

            it('populates end from data', function() {
                var s = new mod.Sprint({ end: '01/01/2014' });
                expect(s.end).toBe('01/01/2014');
            });
        });

        describe('get_cards', function() {
            it('has get_cards', function() {
                expect(sprint.get_cards).toBeDefined();
            });

            it('defaults get_cards to null', function() {
                expect(sprint.get_cards).toBe(null);
            });

            it('populates get_cards from data', function () {
                var s = new mod.Sprint({ get_cards: 'resource_path' });
                expect(s.get_cards).toBe('resource_path');
            });
        });
    });
}(Agile));