require "rspec"
require "etd"

RSpec.describe "etd" do
  let(:list) { [0, 3, 5, 4, -5, 10, 1, 90] }

  describe "#my_min_slow" do
    it "finds the min element in an array" do
      expect(my_min_slow(list)).to be(-5)
    end
  end

  describe "#my_min_fast" do
    it "finds the min element in an array" do
      expect(my_min_fast(list)).to be(-5)
    end
  end
end
