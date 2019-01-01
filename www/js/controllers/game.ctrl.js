angular.module('MemoryGame').controller('GameController', GameController);

GameController.$inject = ['$scope', 'DataService','$timeout'];

function GameController($scope, DataService, $timeout) {
 
  $scope.definitions = DataService.data.cards.definitions
  $scope.terms = DataService.data.cards.terms;
  $scope.life1 = DataService.data.life1;
  $scope.restartgame2 = DataService.data.restartgame;

  var index1,index2;
  var term,definition;
  var termcount = 0;
  var defindex, termindex;
  var wincount = 0;
  $scope.answersscreen = false;
  $scope.definitiontouch = false;
  $scope.termtouch = false;
  $scope.donttouchterm = false;
  $scope.donttouchdef = false;
  $scope.toMenuScreen = false;
  $scope.gameover = false;
  $scope.levelfinished = false;
  $scope.correctanswer = false;
  $scope.incorrectanswer = false;
  var lifecount = 4; //the lifes count know when the lifes endeing



  $scope.equalcards = function () {

    /*********************************************
     * here we can change the number of the index
     * and than we can matched the cards
     * 
     */


    if ($scope.termtouch == true && $scope.definitiontouch == true) {
      if (index1 == index2) {
        $scope.donttouchdef = false;
        $scope.donttouchterm = false;
        wincount++;
        $scope.correctanswer = true;
        $scope.answersscreen = true;
        $timeout(backToCards, 1000);
        // if the cards not equal, the player lose 1 life
      } else {
        $scope.donttouchdef = false;
        $scope.donttouchterm = false;
        $scope.incorrectanswer = true;
        $scope.answersscreen = true;
        $timeout(backToCards, 3000);
        $scope.life1[4 - lifecount] = false;
        lifecount--;
      }
      if (wincount == 9) {
        $scope.levelfinished = true;
        for (var i = 0; i < 9; i++) {
          $scope.definitions[i].matched = false; // var then hide card if the card touched
          $scope.terms[i].matched = false; // var then hide card if the card touched
        }
      }
    }
  }

  // reset the game - reset all the  variable
  $scope.resetgame = () => {
    $scope.answersscreen = false;
    $scope.gameover = false;
    $scope.correctanswer = false;
    $scope.incorrectanswer = false;
    term = 50
    definition = 51;
    lifecount = 4;
    for (var i = 0; i < 9; i++) {
      $scope.definitions[i].matched = false; // var then hide card if the card touched
      $scope.terms[i].matched = false; // var then hide card if the card touched
    }
    for (var i = 0; i < 4; i++) {
      $scope.life1[i] = true;
    }

  }
  function backToCards(){
    $scope.correctanswer = false;
    $scope.incorrectanswer = false;
    if (lifecount != 0) {
      $scope.answersscreen = false;
    }
    $scope.definitiontouch = false;
    $scope.termtouch = false;
    if (lifecount == 0) {
      $scope.gameover = true;
      $scope.answersscreen = true;
    }
    if(index1 != index2){
      $scope.definitions[defindex].matched = false; // var then hide card if the card touched
      $scope.terms[termindex].matched = false; // var then hide card if the card touched
    }
    
  }
 


  /******************/
  // when user clicked on small card, flip the card
  //The function get typecard- the card type to know th type that the user click
  $scope.smallCardFlip = (index,cardType) => 
    {
    if(cardType=='def'){
      $scope.cardCurrentValueDef = $scope.definitions[index].value;
      $scope.definitions[index].matched = true;
      index2 = $scope.definitions[index].index;
      $scope.donttouchdef = true;
      definition = index;
      $scope.definitiontouch = true;
      defindex = index;
      DataService.data.restartgame == false;
    }
    if(cardType=='term')
    {
      termindex = index;
      $scope.termtouch = true;
      $scope.cardCurrentValueTerm = $scope.terms[index].value;
      index1 = $scope.terms[index].index;
      $scope.donttouchterm = true;
      $scope.terms[termindex].matched = true;
      term = index;
      DataService.data.restartgame == false;
    }
  }

  /******************/
  // when user clicked on the big card - term/definition
  //The function get typecard- the card type to know th type that the user click
  $scope.bigCardFlip = (cardType) => {
    if(cardType=='term'){
      $scope.termtouch = false;
      $scope.terms[termindex].matched = false; // var then hide card if the card touched
      $scope.donttouchterm = false;
      }
    if(cardType=='def'){
      $scope.definitiontouch = false;
    $scope.definitions[defindex].matched = false; // var then hide card if the card touched
    $scope.donttouchdef = false;
        }
  }
  $scope.tomenu = () => {
    $scope.toMenuScreen = true;
    $scope.answersscreen = true;

  }
  $scope.togame = () => {
    $scope.toMenuScreen = false;
    $scope.answersscreen = false;
  }
}
