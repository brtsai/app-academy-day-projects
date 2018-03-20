require_relative 'piece.rb'

class Knight
  def initialize(color, board, position)
    super(color, board, position)
  end

  def symbol
    if color == "black"
      return :♞
    else
      return :♘
    end
  end
end
