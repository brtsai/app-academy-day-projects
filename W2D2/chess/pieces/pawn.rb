require_relative 'piece.rb'

class Pawn < Piece

  def initialize(color, board, position)
    super(color, board, position)
    self.at_start_row = true
  end

  def symbol
    if color == "black"
      return :♟
    else
      return :♙
    end
  end

  def move_dirs
  end

  private

  attr_accessor :at_start_row

  def at_start_row?

  end

  def forward_dir
    #returns 1 or -1
  end

  def side_attacks

  end
end
