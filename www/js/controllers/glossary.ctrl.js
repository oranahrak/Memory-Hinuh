angular.module('MemoryGame').controller('GlossaryController', GlossaryController);

GlossaryController.$inject = ['$scope', '$state', 'DataService'];
var clickedindex;

function GlossaryController($scope, $state, DataService) {

  var indexsub = DataService.data.subjectnow;
  var correctdef;

  $scope.subjects = DataService.subjects;
  $scope.terms = DataService.subjects[indexsub].cards.terms; 
  $scope.definitions = DataService.data.cards.definitions



  // ************
  // When the user clicked on term he will see the definition
  $scope.termclicked = function (index) {
    clickedindex = DataService.subjects[indexsub].cards.terms[index].index;
    for (var i = 0; i < 9; i++) {
      if (clickedindex == DataService.subjects[indexsub].cards.definitions[i].index) {
        correctdef = i;
      }
    }
    $scope.theindex = DataService.subjects[indexsub].cards.definitions[correctdef].value;

  }
}
