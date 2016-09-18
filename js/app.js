//入口文件
//require(['js/math.js'],function(math){    //   ./math.js表示当前路径下
//	var result = math.add(1,2);
//	alert(result);
//	
//})

require.config({
//	baseUrl: './' ,          //不设置的话是默认为根目录
	paths:{
		jquery:'jquery-1.12.1',
		backbone:'backbone', //做路由用的框架
		router:'router',
		text:'text',
		index:'index',
		css:'css',
		homeJS:"../component/home/home",
		paradiseJS:'../component/paradise/paradise',
		cardJS:'../component/card/card',
		mineJS:'../component/mine/mine',
		lazyLoad:'jquery.lazyload',
		iscroll:'../component/paradise/iscroll'

	},
	shim:{
		'index':{
			deps:['jquery']
		},
		'lazyLoad':{
			deps:['jquery']
		}
	}
	
})

//参数与前面的一一对应
require(['backbone','jquery','router','text','index','lazyLoad','../component/paradise/iscroll'],function(backbone, $, router, text, index, layload, iscroll){
	backbone.history.start();
})
