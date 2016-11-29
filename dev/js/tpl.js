/*
组件文件

存放vue组件

20161122 fred 创建

*/


// 头部组件
var _headerData = function(){
	var _opts = {
		logoUrl: '../html/index.html',
		navs: [
			{
				href: '../html/index.html',
				text: '首页',
				isActive: 'active'
			},
			{
				href: '../components/index.html',
				text: '基础组件',
				isActive: ''
			},{
				href: '../extends/index.html',
				text: '拓展组件',
				isActive: ''
			}
		]
	};

	return _opts;
};

var _headerTpl = function(){
	var _html = '';

	_html += '<div class="header_container">';
	_html += '	<div class="wrap">';
	_html += '		<h1 class="logo"><a :href="logoUrl">inUI</a></h1>';
	_html += '		<div id="nav" class="nav">';
	_html += '			<ul>';
	_html += '				<template v-for="link in navs">';
	_html += '				<li :class="link.isActive"><a :href="link.href">{{ link.text }}</a></li>';
	_html += '				</template>';
	_html += '			</ul>';
	_html += '		</div>';
	_html += '	</div>';
	_html += '</div>';

	return _html;
};

// 组件名必须小写
Vue.component('tpl-headercontainer', {
	template: _headerTpl(),
	data: function () {
		return _headerData();
	}
});



// 底部组件
var _footerData = function(){
	var _opts = {
		crp: '@author 硬蛋-web前端团队'
	};

	return _opts;
};

var _footerTpl = function(){
	var _html = '';

	_html += '<div class="footer_container">';
	_html += '	<div class="wrap">';
	_html += '		<p class="crp">{{ crp }}</p>';
	_html += '	</div>';
	_html += '</div>';

	return _html;
};

// 组件名必须小写
Vue.component('tpl-footercontainer', {
	template: _footerTpl(),
	data: function () {
		return _footerData();
	}
});

