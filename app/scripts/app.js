'use strict';

/**
 * @ngdoc overview
 * @name tommysiteApp
 * @description
 * # tommysiteApp
 *
 * Main module of the application.
 */
angular
  .module('tommysiteApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angular-carousel'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        title: '关于'
      })
      .when('/link', {
        templateUrl: 'views/link.html',
        controller: 'LinkCtrl',
        controllerAs: 'lkCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })

  .controller('GlobalController', function (
    $location,
    navs,
    footNavs
  ) {
    var self = this;
    self.navs = navs;
    self.setActiveNav = function (index) {
      angular.forEach(self.navs, function (nav, subIndex) {
        nav.active = index === subIndex;
      });
    };
    self.footNavs = footNavs;
    self.carousel = [
      {
        url: 'styles/images/01.jpg',
        title: '图片1'
      },
      {
        url: 'styles/images/02.jpg',
        title: '图片2'
      },
      {
        url: 'styles/images/03.jpg',
        title: '图片3'
      },
      {
        url: 'styles/images/04.jpg',
        title: '图片4'
      }
    ];
    self.goHome = function () {
      location.href = "http://tomi.in";
    };
  })

  .factory('links', function ($http) {
    // return test data.
    return [
      {
        url : 'http://www.citygf.com',
        title : '广佛都市网',
        desc : '佛山珠江传媒信息有限公司'
      },
      {
        url : 'http://my.oschina.net/tommyfok/',
        title : '我的博客',
        desc : '开源中国的博客，写了不少文章'
      },
      {
        url : 'http://my.oschina.net/tommyfok/',
        title : '我的博客',
        desc : '开源中国的博客，写了不少文章'
      },
      {
        url : 'http://my.oschina.net/tommyfok/',
        title : '我的博客',
        desc : '开源中国的博客，写了不少文章'
      }
    ];
  })

  .factory('navs', function () {
    // return fake vals
    return [
      {
        url : '/',
        title : 'Home'
      },
      {
        url : '/link',
        title : 'Link'
      },
      {
        url : '/about',
        title : 'About'
      }
    ];
  })

  .factory('footNavs', function () {
    // return fake vals
    return [
      {
        url : 'http://www.weibo.com/fsbeta',
        title : 'Weibo',
        newTab : true
      },
      {
        url : 'http://weixin.qq.com',
        title : '微信',
        newTab : true
      },
      {
        url : 'https://twitter.com/tuomihuo',
        title : 'Twitter',
        newTab : false
      }
    ];
  });
