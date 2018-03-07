require 'colorize'
require_relative 'board.rb'
require_relative 'cursor.rb'

class Display
#color = (col + row).even? ? :black : :white

  def initialize

    @cursor = Cursor.new([0,0], board)
  end

  def read_char
    #handles console input
  end


  def update_pos(pos)

  end
end
