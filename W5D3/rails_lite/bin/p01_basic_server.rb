require 'rack'
require 'byebug'

app = Proc.new do |env|
  req = Rack::Request.new(env)
  res = Rack::Response.new
  res['Content-Type'] = 'text/html'
  debugger
  res.write(req.path)
  debugger
  res.finish
end

Rack::Server.start(
  app: app,
  port: 3000
)
