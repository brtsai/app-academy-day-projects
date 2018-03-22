require_relative 'piece.rb'

class King
  def initialize(color, board, pos)
    super(color, board, pos)
  end

  def symbol
    if color == "black"
      return :♚
    else
      return :♔
    end
  end
end
