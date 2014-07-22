var $ = require('jquery');
var stitch = require('../../stitch/src/stitch');

window.stitch = stitch;

window.render = $('#render');
// window.unbound = $('#unbound');

// window.model = {
// 	text: "hello",
// 	childCount: 9
// };
// window.person = {
// 	name: "Dave",
// 	age: 25
// };
// window.personTpl = "<div><p>{{name}}</p><p>{{age}}</p></div>";

// $.ajax({
// 	url: '/template.html',
// 	async: false,
// 	success: function(data) {
// 		window.tpl = data;
// 	}
// });

window.itemTpl = '<li class="item" model="item" id="1">' +
	'<div class="delete"></div>' +
	'<div class="children" show="{{childCount}}">{{childCount}}</div>' +
	'<div class="state" show="{{!childCount}}">' +
		'<input type="checkbox" checked="{{done}}" />' +
	'</div>' +
	'<div class="text">{{text}}</div>' +
'</li>';

window.itemData = {
	childCount: 3,
	text: "Hello"
};