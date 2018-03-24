require 'rspec'
require 'anagrams'

RSpec.describe "anagrams.rb" do

let (:word_one) { "gizmo" }
let (:word_two) { "sally" }
let (:word_three) { "elvis" }
let (:word_four) { "lives" }


  describe "#first_anagram?" do
    it "returns false when two words are not anagrams" do
      expect(first_anagram?(word_one, word_two)).to be false
    end

    it "returns true when two words are anagrams" do
      expect(first_anagram?(word_three, word_four)).to be true
    end

  end

end
