class Cat < ApplicationRecord
  validates :birth_date, :color, :name, :sex, presence: true
  validates :sex, inclusion: { in: ['M', 'F'] }

  COLORS = ["grey", "brown", "yellow", "white", "black", "orange"]

  def self.colors
    COLORS
  end

end
