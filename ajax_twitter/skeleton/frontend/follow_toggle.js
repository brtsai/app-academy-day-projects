const FollowToggle = function($el) {
	this.userId = $el.data('user-id');
	this.followState = $el.data('initial-follow-state');
	this.$el = $el;

	this.addListeners();
	this.render();
};

FollowToggle.prototype.addListeners = function() {
	this.$el.on('click', event => {
		event.preventDefault();
		this.handleClick();
	});
};

FollowToggle.prototype.render = function() {
	if (this.followState === 'unfollowed') {
		this.$el.text('Follow!');
	} else {
		this.$el.text('Unfollow!');
	}
};

FollowToggle.prototype.handleClick = async function() {
	let method;

	if (this.followState === 'unfollowed') {
		method = 'post';
	} else {
		method = 'delete';
	}

	const followTogglePromise = await $.ajax({
		method: method,
		url: `/users/${this.userId}/follow`,
		dataType: 'json'
	});

	// followTogglePromise.then(() => {
	// 	this._toggle();
	// 	this.render();
	// });

	this._toggle();
	this.render();
};

FollowToggle.prototype._toggle = function() {
	if (this.followState === 'unfollowed') {
		this.followState = 'follow';
	} else {
		this.followState = 'unfollowed';
	}
};

module.exports = FollowToggle;
