const APIUtil = require('./api_util.js');

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

FollowToggle.prototype.handleClick = function() {
	let followPromise;

	if (this.followState === 'unfollowed') {
		followPromise = APIUtil.followUser;
	} else {
		followPromise = APIUtil.unfollowUser;
	}

	const followToggle = this;

	followPromise(this.userId).then(function() {
		followToggle._enableButton();
		followToggle._toggle();
		followToggle.render();
	});

	this._disableButton();
};

FollowToggle.prototype._disableButton = function() {
	this.$el.prop('disabled', true);
};

FollowToggle.prototype._enableButton = function() {
	this.$el.prop('disabled', false);
};

FollowToggle.prototype._toggle = function() {
	if (this.followState === 'unfollowed') {
		this.followState = 'follow';
	} else {
		this.followState = 'unfollowed';
	}
};

module.exports = FollowToggle;
