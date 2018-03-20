require 'rspec'
require 'tdd_problems'

describe "tdd_problems" do
  describe "#remove_dups" do
    it "returns an array" do
      expect(remove_dups([]).class).to be(Array)
    end

    it "removes duplicates in an array" do
      expect(remove_dups([1,1])).to eq([1])
    end

    it "returns elements in the original order that they came in" do
      expect(remove_dups([1,1,2,2,3,3])).to eq([1,2,3])
      expect(remove_dups([1,3,3,2,2,1])).to eq([1,3,2])
    end
  end

  describe Array do

    describe "#two_sum" do
      it "returns an array" do
        expect([].two_sum.class).to be(Array)
      end

      it "does not return spurious pairs" do
        expect([0,1,1].two_sum).to eq([])
      end

      it "should return entries in dictionary order" do
        expect([-1, 0, 2, -2, 1].two_sum).to eq([[0, 4], [2, 3]])
      end
    end

    describe "#my_transpose" do
      it "works on an empty array" do
        expect([].my_transpose).to eq([])
      end

      it "works on an array containing an empty array" do
        expect([[]].my_transpose).to eq([])
      end

      it "returns a 2d array" do
        expect([[1]].my_transpose.first.is_a?(Array)).to eq(true)
      end


      it "transposes the array" do
        cols = [[0, 1, 2],[3, 4, 5],[6, 7, 8]]
        expect(cols.my_transpose).to eq(cols.transpose)
      end

      it "raises a type error unless the arrays elements are arrays" do
        expect{ [1].my_transpose }.to raise_error(TypeError)
      end

      it "doesn't call Array.transpose" do
        cols = [[0, 1, 2],[3, 4, 5],[6, 7, 8]]
        expect(cols).not_to receive(:transpose)
        cols.my_transpose
      end

    end
  end

  describe "#stock_picker" do
    it "returns an array of valid buy/sell dates" do
      expect(stock_picker([1,2]).class).to be(Array)
    end

    it "the sell date does not come before the buy date" do
      result = stock_picker([1,2])
      buy_date,sell_date = result
      expect(sell_date<buy_date).to eq(false)
    end

    it "returns the most profitable buy and sell dates available" do
      expect(stock_picker([1,2,3])).to eq([0,2])
      expect(stock_picker([2,3,4,3,2,1])).to eq([0,2])
    end

    context "when the stock only goes down in price" do
      it "returns the earliest and most profitable pairs" do
        expect(stock_picker([4,3,2,1])).to eq([0,0])
      end
    end
  end

  describe TowersOfHanoi do

    subject(:toh) {TowersOfHanoi.new}

    describe "#initialize" do
      it "instantiates three piles of discs" do
        expect(toh.towers.class).to be(Array)
        expect(toh.towers.length).to eq(3)
        expect(toh.towers.all?{|tower| tower.is_a?(Array)}).to eq(true)
      end

      it "starts all the discs on the left peg in correct order" do
        expect(toh.towers).to eq([[3,2,1],[],[]])
      end
    end

    describe "#move" do
      context "clean input" do
        it "doesn't lose any discs" do
          toh.move(0,2)
          expect(toh.towers.flatten.sort).to eq([1,2,3])
        end

        it "moves disc onto correct peg" do
          toh.move(0,2)
          expect(toh.towers).to eq([[3,2],[],[1]])
        end

      end

      context "invalid input" do
        it "raises error if pegs don't exist" do
          expect{ toh.move(-1, 1) }.to raise_error(ArgumentError)
          expect{ toh.move(1, -1) }.to raise_error(ArgumentError)
          expect{ toh.move(4, 1) }.to raise_error(ArgumentError)
          expect{ toh.move(1, 4) }.to raise_error(ArgumentError)
          expect{ toh.move(-1, 4) }.to raise_error(ArgumentError)
        end
        it "raises error if starting peg is empty" do
          expect{ toh.move(1,2) }.to raise_error(ArgumentError)
        end
        it "raises error if moving a larger disc onto a smaller disc" do
          toh.move(0,2)
          expect{ toh.move(0,2) }.to raise_error(ArgumentError)
        end
      end
    end

    describe "#won?" do
      context "in a winning state" do
        it "returns true" do
          toh.move(0,2)
          toh.move(0,1)
          toh.move(2,1)
          toh.move(0,2)
          toh.move(1,0)
          toh.move(1,2)
          toh.move(0,2)
          expect(toh).to be_won
        end
      end

      context "in a non-winning state" do
        it "returns false" do
          toh.move(0,2)
          toh.move(0,1)
          toh.move(2,1)
          toh.move(0,2)
          toh.move(1,0)
          expect(toh).not_to be_won
        end
        it "returns false if all discs on middle peg" do
          toh.move(0,1)
          toh.move(0,2)
          toh.move(1,2)
          toh.move(0,1)
          toh.move(2,0)
          toh.move(2,1)
          toh.move(0,1)
          expect(toh).not_to be_won

        end
      end

    end

  end
end
