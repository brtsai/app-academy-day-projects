require 'active_support'
require 'active_support/core_ext'
require 'erb'
require_relative './session'
require 'byebug'

class ControllerBase
  attr_reader :req, :res, :params

  # Setup the controller
  def initialize(req, res)
    @session = Session.new(req)
    @req = req
    @res = res
    @render_count = 0
  end

  # Helper method to alias @already_built_response
  def already_built_response?
    raise "double render error" if @render_count > 1
    @render_count > 0
  end

  # Set the response status code and header
  def redirect_to(url)
    @res.redirect(url, 302)
    @render_count += 1
    session.store_session(@res)
    already_built_response?
  end

  # Populate the response with content.
  # Set the response's content type to the given type.
  # Raise an error if the developer tries to double render.
  def render_content(content, content_type)
    @res.write(content)
    @res.set_header("Content-Type", content_type)
    @render_count += 1
    session.store_session(@res)
    already_built_response?
  end

  # use ERB and binding to evaluate templates
  # pass the rendered html to render_content
  def render(template_name)
    folder_name = self.class.name.underscore
    invoke_action(template_name)
    template_contents = File.read("lib/../views/#{folder_name}/#{template_name}.html.erb")
    res.write(ERB.new(template_contents).result(binding))
    @res.set_header("Content-Type", "text/html")
    @render_count += 1
    session.store_session(@res)
    already_built_response?
  end

  # method exposing a `Session` object
  def session
    @session
  end

  # use this with the router to call action_name (:index, :show, :create...)
  def invoke_action(name)
    self.send(name)
  end
end

