require 'rspec'
require 'card'

describe Card do
  subject(:card) { Card.new(0,0) }

  describe "#initialize" do
    it "Should set a suit and value" do
      expect(card.suit).to be(0)
      expect(card.value).to be(0)
    end
  end

end
