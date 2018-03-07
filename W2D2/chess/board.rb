require_relative 'pieces/piece.rb'
require_relative 'errors/invalid_move_error.rb'
class Board
  attr_reader :rows
  def initialize
    @rows = []
    (0...8).each do |row|
      curr_row = []
      (0...8).each do |col|
        if row > 1 && row < 6
          curr_row << nil
        else
          curr_row << Piece.new("black", self, [col, row])
        end
        #curr_row << NullPiece.new(:null, self, [col, row])
      end
      @rows << curr_row
    end
    @sentinel
  end

  def move_piece(start_pos, end_pos)
    unless is_a_piece_at?(start_pos)
      raise NoSuchPieceError.new(start_pos)
    end
    piece = self[start_pos]
    unless piece.valid_moves.include?(end_pos)
      raise InvalidMoveError.new(end_pos)
    end
    self[end_pos] = piece
    self[start_pos] = nil
    piece.pos = end_pos
    # render
  end

  def inspect
    @rows.inspect
  end

  def [](pos)
    col, row = pos
    @rows[row][col]
  end

  def []=(pos, piece)
    col, row = pos
    @rows[row][col] = piece
  end

  def is_a_piece_at?(pos)
    return false if pos.nil?
    return false unless valid_pos?(pos)
    piece = self[pos]
    is_a_non_null_piece?(piece)
  end

  def is_a_non_null_piece?(piece)
    return false unless piece.is_a?(Piece)

    # uncomment when no longer using place holder nil for NullPiece
    # return false if piece.is_a?(NullPiece)
    return false if piece.nil?

    true
  end

  def valid_pos?(pos)
    x, y = pos
    return false unless x.between?(0,7) && y.between?(0,7)
    return true
  end


end


class NoSuchPieceError < ArgumentError
  def message
    "There is no such piece at #{self.to_s}"
  end
end
