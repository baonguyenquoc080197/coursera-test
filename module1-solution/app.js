(function () {
  'use strict';
  angular.module('LunchCheck', []).controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController ($scope) {
    $scope.foodLists = '';
    $scope.message = ''
    $scope.checkTooMuch = function() {
      const splitFoods = $scope.foodLists.split(',');
      if (splitFoods.length > 3) {
        $scope.message = 'Too much!';
      } else if ($scope.foodLists === '' || splitFoods.length === 0) {
        $scope.message = "Please enter data first!"
      } else {
        $scope.message = 'Enjoy!';
      }
    }
  }
})();
