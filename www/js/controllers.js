angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
    $scope.current = {
      menu: null,
      subMenu: []
    };

    $scope.menus = {
      'category': [
        {
          'name': '全部分类',
          'count': 100,
          'sub': []
        },
        {
          'name': '美食2',
          'count': 100,
          'sub': [
            {
              name: '火锅',
              count: 100
            },
            {
              name: '火锅3',
              count: 100
            },
            {
              name: '火锅',
              count: 100
            },
            {
              name: '火锅',
              count: 100
            },
            {
              name: '火锅',
              count: 100
            },
            {
              name: '火锅',
              count: 100
            },
            {
              name: '火锅',
              count: 100
            },
            {
              name: '火锅',
              count: 100
            },
            {
              name: '火锅',
              count: 100
            },
            {
              name: '火锅',
              count: 100
            },
            {
              name: '火锅',
              count: 100
            },
          ],
        },
        {
          'name': '美食',
          'count': 100,
          'sub': [
            {
              name: '火锅',
              count: 100
            },
            {
              name: '火锅',
              count: 100
            },
            {
              name: '火锅',
              count: 100
            },
            {
              name: '火锅',
              count: 100
            },
            {
              name: '火锅',
              count: 100
            },
            {
              name: '火锅',
              count: 100
            },
            {
              name: '火锅',
              count: 100
            },
            {
              name: '火锅',
              count: 100
            },
            {
              name: '火锅',
              count: 100
            },
            {
              name: '火锅',
              count: 100
            },
            {
              name: '火锅',
              count: 100
            },
          ],
        },
        {
          'name': '美食',
          'count': 100,
          'sub': [
            {
              name: '火锅',
              count: 100
            },
            {
              name: '火锅',
              count: 100
            },
            {
              name: '火锅',
              count: 100
            },
            {
              name: '火锅',
              count: 100
            },
            {
              name: '火锅',
              count: 100
            },
            {
              name: '火锅',
              count: 100
            },
            {
              name: '火锅',
              count: 100
            },
            {
              name: '火锅',
              count: 100
            },
            {
              name: '火锅',
              count: 100
            },
            {
              name: '火锅',
              count: 100
            },
            {
              name: '火锅',
              count: 100
            },
          ],
        },
        {
          'name': '美食',
          'count': 100,
          'sub': [
            {
              name: '火锅',
              count: 100
            },
            {
              name: '火锅',
              count: 100
            },
            {
              name: '火锅',
              count: 100
            },
            {
              name: '火锅',
              count: 100
            },
            {
              name: '火锅',
              count: 100
            },
            {
              name: '火锅',
              count: 100
            },
            {
              name: '火锅',
              count: 100
            },
            {
              name: '火锅',
              count: 100
            },
            {
              name: '火锅',
              count: 100
            },
            {
              name: '火锅',
              count: 100
            },
            {
              name: '火锅',
              count: 100
            },
          ],
        },
        {
          'name': '美食',
          'count': 100,
          'sub': [
            {
              name: '火锅',
              count: 100
            },
            {
              name: '火锅',
              count: 100
            },
            {
              name: '火锅',
              count: 100
            },
            {
              name: '火锅',
              count: 100
            },
            {
              name: '火锅',
              count: 100
            },
            {
              name: '火锅',
              count: 100
            },
            {
              name: '火锅',
              count: 100
            },
            {
              name: '火锅',
              count: 100
            },
            {
              name: '火锅',
              count: 100
            },
            {
              name: '火锅',
              count: 100
            },
            {
              name: '火锅',
              count: 100
            },
          ],
        },
        {
          'name': '美食',
          'count': 100,
          'sub': [
            {
              name: '火锅',
              count: 100
            },
            {
              name: '火锅',
              count: 100
            },
            {
              name: '火锅',
              count: 100
            },
            {
              name: '火锅',
              count: 100
            },
            {
              name: '火锅',
              count: 100
            },
            {
              name: '火锅',
              count: 100
            },
            {
              name: '火锅',
              count: 100
            },
            {
              name: '火锅',
              count: 100
            },
            {
              name: '火锅',
              count: 100
            },
            {
              name: '火锅',
              count: 100
            },
            {
              name: '火锅',
              count: 100
            },
          ],
        },
        {
          'name': '美食',
          'count': 100,
          'sub': [
            {
              name: '火锅',
              count: 100
            },
            {
              name: '火锅',
              count: 100
            },
            {
              name: '火锅',
              count: 100
            },
            {
              name: '火锅',
              count: 100
            },
            {
              name: '火锅',
              count: 100
            },
            {
              name: '火锅',
              count: 100
            },
            {
              name: '火锅',
              count: 100
            },
            {
              name: '火锅',
              count: 100
            },
            {
              name: '火锅',
              count: 100
            },
            {
              name: '火锅',
              count: 100
            },
            {
              name: '火锅',
              count: 100
            },
          ],
        },
        {
          'name': '美食',
          'count': 100,
          'sub': [
            {
              name: '火锅',
              count: 100
            },
            {
              name: '火锅',
              count: 100
            },
            {
              name: '火锅',
              count: 100
            },
            {
              name: '火锅',
              count: 100
            },
            {
              name: '火锅',
              count: 100
            },
            {
              name: '火锅',
              count: 100
            },
            {
              name: '火锅',
              count: 100
            },
            {
              name: '火锅',
              count: 100
            },
            {
              name: '火锅',
              count: 100
            },
            {
              name: '火锅',
              count: 100
            },
            {
              name: '火锅',
              count: 100
            },
          ],
        },
      ],
      'area': [
        {
          'name': '全城',
          'count': 100,
          'sub': []
        },
        {
          'name': '武侯区',
          'count': 100,
          'sub': []
        },
        {
          'name': '青羊区',
          'count': 100,
          'sub': []
        }
      ],
      'order': [
        {
          'name': '默认排序',
          'sub': []
        },
        {
          'name': '离我最近',
          'sub': []
        },
        {
          'name': '评价最高',
          'sub': []
        }
      ]
    };

    $scope.condition = {
      'category': $scope.menus.category[0],
      'area': $scope.menus.area[0],
      'order': $scope.menus.order[0]
    };

    $scope.query = query;

    init();

    ////////////////

    function init() {
    }

    function query() {
      console.log($scope.condition);
    }
  })

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
