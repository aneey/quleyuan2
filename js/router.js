define(['backbone'],function(backbone){//路由  依赖backbone
	var Router = Backbone.Router.extend({//extend继承  为什么backbone
		routes:{
			'':'homefunc',
			'home':'homefunc',
			'paradise':'paradisefunc',
			'card':'cardfunc',
			'mine':'minefunc'
		},
		homefunc:function(){
			// console.log(content);
			
			require(["homeJS"],function(content){
				content.homeJS();
			})
		},
		paradisefunc:function(){
//			console.log('list');
			
			require(['paradiseJS'],function(content){
				content.paradiseJS();
				content.show();
			})
		},
		cardfunc:function(){
			require(['cardJS'],function(content){
				content.cardJS();
			})
		},
		minefunc:function(){
			require(['mineJS'],function(content){
				content.mineJS();
			})
		}
	})
	//实例化
	var router= new Router();
	return router;
	
})
