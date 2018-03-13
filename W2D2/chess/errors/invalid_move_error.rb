class InvalidMoveError < ArgumentError
  def message
    "#{self.to_s} is an invalid move!"
  end
end
