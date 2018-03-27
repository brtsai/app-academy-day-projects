const FollowToggle = require('./follow_toggle.js');
const UsersSearch = require('./users_search.js');

$(() => {
	$('.follow-toggle').each(function(index, el) {
		let $el = $(el);
		new FollowToggle($el);
	});

	$('nav.users-search').each(function(index, el) {
		new UsersSearch(el);
	});
});
