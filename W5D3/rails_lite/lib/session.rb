require 'json'

class Session
  # find the cookie for this app
  # deserialize the cookie into a hash
  def initialize(req)
    app_cookie = req.cookies['_rails_lite_app']
    if app_cookie
      @ivar = JSON.parse app_cookie
    else
      @ivar = Hash.new
    end
  end

  def [](key)
    @ivar[key]
  end

  def []=(key, val)
    @ivar[key] = val
  end

  # serialize the hash into json and save in a cookie
  # add to the responses cookies
  def store_session(res)
    res.set_cookie('_rails_lite_app', @ivar.to_json)
  end
end
