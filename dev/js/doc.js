/*

文档业务文件

20161121 fred 创建

*/

// 主体
var _main = new Vue({
	el: '#main',
	methods: {
		test: function(event){
			console.log(event);
			console.log('test');

			this.$nextTick(function () {
				console.log('刷新了dom');
			});
		},
		test3: function(msg) {
			console.log(msg);
		}
	}
});


_main.$on('test2', function (msg) {
	console.log(msg);
});

_main.$emit('test2', 'how are you');


_main.test3('今天天气不错');


_main.$nextTick(function(){
	console.log('整个刷新了dom');
});



