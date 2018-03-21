const FollowToggle = require('./follow_toggle.js');

$(() => {
	$('.follow-toggle').each(function(index, el) {
		let $el = $(el);
		new FollowToggle($el);
	});
});
