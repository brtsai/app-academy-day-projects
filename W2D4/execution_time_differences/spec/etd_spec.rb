require "rspec"
require "etd"

RSpec.describe "etd" do
  describe "my_min" do

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

  describe "largest_contiguous_subsum" do

    let(:list1) { [5, 3, -7] }
    let(:list2) { [2, 3, -6, 7, -6, 7] }
    let(:list3) { [-5, -1, -3] }

    describe "#largest_contiguous_subsum_slow" do
      it "finds the largest contiguous subsum" do
        expect(largest_contiguous_subsum_slow(list1)).to be(8)
        expect(largest_contiguous_subsum_slow(list2)).to be(8)
        expect(largest_contiguous_subsum_slow(list3)).to be(-1)
      end
    end

    describe "#largest_contiguous_subsum_fast" do
      it "finds the largest contiguous subsum" do
        expect(largest_contiguous_subsum_fast(list1)).to be(8)
        expect(largest_contiguous_subsum_fast(list2)).to be(8)
        expect(largest_contiguous_subsum_fast(list3)).to be(-1)
      end
    end

  end
end
