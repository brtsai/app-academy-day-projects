def remove_dups(arr)
  ret_arr = []
  arr.each { |val| ret_arr << val unless ret_arr.include?(val) }
  ret_arr
end

class Array
  #refactor two_sum later w/ each_with_index
  def two_sum
    pairs = []
    (0...self.length).each do |left|
      (left+1...self.length).each do |right|
        pairs<<[left,right] if self[left]+self[right]==0
      end
    end
    pairs
  end

  #refactor later
  def my_transpose
    raise TypeError unless self.all? { |val| val.is_a?(Array)}
    return [] if self.flatten.length == 0
    arr = Array.new(self[0].length) { Array.new }

    (0...self[0].length).each do |col_idx|
      (0...self.length).each do |row_idx|
        arr[col_idx] << self[row_idx][col_idx]
      end
    end

    arr
  end
end

def stock_picker(prices)
  max_profit = 0
  buy_date, sell_date = [0,0]

  (0...prices.length).each do |buy|
    (buy...prices.length).each do |sell|
      profit = prices[sell] - prices[buy]
      if profit > max_profit
        buy_date, sell_date = buy, sell
        max_profit = profit
      end
    end
  end

  [buy_date, sell_date]
end

class TowersOfHanoi

  attr_reader :towers

  def initialize
    @towers = [[3,2,1],[],[]]
  end

  def move(origin, destination)
    unless origin.between?(0,2) && destination.between?(0,2)
      raise ArgumentError.new("Peg(s) don't exist")
    end
    if @towers[origin].empty?
      raise ArgumentError.new("No disc at peg #{origin}")
    end
    starting_disc = @towers[origin].last
    destination_disc = @towers[destination].last
    unless destination_disc.nil? || starting_disc < destination_disc
      raise ArgumentError.new("Disk at destination peg smaller than origin")
    else
      @towers[destination] << @towers[origin].pop
    end
    nil
  end

  def won?
    @towers.last == [3,2,1]
  end

  def run
    until won?
      render
      take_turn
    end
    puts "Congrats, You Won!"
  end

  def take_turn
    begin
      origin, destination = ask_for_user_input
      move(origin, destination)
    rescue
      puts "Invalid move, try again"
      retry
    end
  end

  def ask_for_user_input
    puts "Please enter a move i.e. \"0,1\""
    left,right = gets.chomp.split(",").map{|coord| coord.to_i}
    [left,right]
  end

  def render
    2.downto(0) do |height|
      to_p = ""
      (0..2).each do |tower|
        current_tower = @towers[tower]
        to_p << (current_tower[height].nil? ? " " : current_tower[height].to_s)
      end
      puts to_p
    end
    puts "---"
    puts "012"
  end

end
