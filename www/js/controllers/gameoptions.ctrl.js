angular.module('MemoryGame').controller('GameOptionsController', GameOptionsController);

GameOptionsController.$inject = ['$scope', '$state', 'DataService'];

function GameOptionsController($scope, $state, DataService) {
  $scope.subjects = DataService.subjects;

  $scope.goToGame = function (subject, index) {

    DataService.gameInit(subject);
    DataService.data.subjectnow = index;
    $state.go('game');

  }
}
