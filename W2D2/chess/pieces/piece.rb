class Piece
  def initialize(color, board, position)
    @color = color
    @board = board
    @position = position
  end

  def to_s

  end

  def empty?

  end

  def valid_moves
    moves = []
    (0...8).each do |row|
      (0...8).each do |col|
        moves << [row,col]
      end
    end
    moves
  end

  def pos=(val)
    @position = val 
  end



  def inspect
    "@color=#{@color}, @position=#{@position}"
  end

  def symbol
    :x
  end

  private

  def move_into_check?(end_pos)

  end

end
