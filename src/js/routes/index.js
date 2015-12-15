/**
 * @name Index
 * @ngdoc Routes
 * @memberof app
 *
 */
(function() {
	"use strict";

	angular.module('app')
		.config(function($stateProvider) {
			var p = "./dist/views/";
			$stateProvider
			.state("index", {
				url: "/",
				controller: "moviesCtrl",
				templateUrl: p + 'index.html'
			}
		);
	});
})();
