//定义一个模块
define([],function(){
	function add(a,b){
		return a+b;
	}
	//通过返回对象形式   可以同时调用多个方法
	return{
		add:add
//		foo:foo
	}
})