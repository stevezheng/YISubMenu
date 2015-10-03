(function () {
  'use strict';

  angular
    .module('yi.subMenu', [])
    .directive('yiSubMenu', yiSubMenu);

  yiSubMenu.$inject = [];
  function yiSubMenu() {
    return {
      replace: false,
      restrict: 'AE',
      link: function (scope, elem, attrs) {
        scope.clickCategory = function (key) {
          scope.current.menu = key == scope.current.menu ? '' : key;
          scope.current.subMenu = [];
        };

        scope.clickMenu = function (menu) {
          if (menu.sub.length > 0) {
            scope.current.subMenu = menu.sub;
          } else {
            scope.condition[scope.current.menu] = menu;
            scope.current.menu = null;
            scope.query();
          }
        };

        scope.clickSubMenu = function (subMenu) {
          scope.condition[scope.current.menu] = subMenu;
          scope.current.menu = null;
          scope.query();
        }
      },
      templateUrl: 'templates/yi/sub-menu.html'
    };
  }
})();
