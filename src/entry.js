var Router = require('routerjs');
new Router()
		.add('#/page1', function () {
			require(['page1'], function (module) {
				module();
			});
		})
		.add('#/page2', function () {
			require(['page2'], function(module){
				module();
			});
		})
		.run();

