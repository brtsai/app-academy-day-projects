const APIUtil = {
	followUser: id => {
		return $.ajax({
			method: 'post',
			url: `/users/${id}/follow`,
			dataType: 'json'
		});
	},

	unfollowUser: id => {
		return $.ajax({
			method: 'delete',
			url: `/users/${id}/follow`,
			dataType: 'json'
		});
	}
};

module.exports = APIUtil;
