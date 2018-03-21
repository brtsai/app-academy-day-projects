require "io/console"
require_relative 'errors/invalid_move_error.rb'
require 'byebug'

KEYMAP = {
  " " => :space,
  "h" => :left,
  "j" => :down,
  "k" => :up,
  "l" => :right,
  "w" => :up,
  "a" => :left,
  "s" => :down,
  "d" => :right,
  "\t" => :tab,
  "\r" => :return,
  "\n" => :newline,
  "\e" => :escape,
  "\e[A" => :up,
  "\e[B" => :down,
  "\e[C" => :right,
  "\e[D" => :left,
  "\177" => :backspace,
  "\004" => :delete,
  "\u0003" => :ctrl_c,
}

MOVES = {
  left: [0, -1],
  right: [0, 1],
  up: [-1, 0],
  down: [1, 0]
}

class Cursor

  attr_reader :cursor_pos, :board, :selected

  def initialize(cursor_pos, board)
    @cursor_pos = cursor_pos
    @board = board
    @selected = false
  end

  def get_input
    key = KEYMAP[read_char]
    handle_key(key)
  end

  private

  def read_char
    STDIN.echo = false # stops the console from printing return values

    STDIN.raw! # in raw mode data is given as is to the program--the system
                 # doesn't preprocess special characters such as control-c

    input = STDIN.getc.chr # STDIN.getc reads a one-character string as a
                             # numeric keycode. chr returns a string of the
                             # character represented by the keycode.
                             # (e.g. 65.chr => "A")

    if input == "\e" then
      input << STDIN.read_nonblock(3) rescue nil # read_nonblock(maxlen) reads
                                                   # at most maxlen bytes from a
                                                   # data stream; it's nonblocking,
                                                   # meaning the method executes
                                                   # asynchronously; it raises an
                                                   # error if no data is available,
                                                   # hence the need for rescue

      input << STDIN.read_nonblock(2) rescue nil
    end

    STDIN.echo = true # the console prints return values again
    STDIN.cooked! # the opposite of raw mode :)

    return input
  end

  def handle_key(key)
    case key
    when :left
      #return @curser_pos
      return handle_move(key)
    when :right
      return handle_move(key)
    when :up
      return handle_move(key)
    when :down
      return handle_move(key)
    when :return
      toggle_selected
      return @cursor_pos
    when :space
      toggle_selected
      return @cursor_pos
    when :ctrl_c
      exit
    end
  end

  def toggle_selected
    @selected = !@selected
  end

  def handle_move(key)
    debugger
    move = MOVES[key]
    update_pos(move)
    return nil
  end

  def update_pos(diff)
    new_x = diff.first + @cursor_pos.first
    new_y = diff.last + @cursor_pos.last
    new_pos = [new_x, new_y]
    unless @board.valid_pos?(new_pos)
      raise InvalidMoveError.new(new_pos)
    end
    @cursor_pos = new_pos

    @cursor_pos
  end
end
