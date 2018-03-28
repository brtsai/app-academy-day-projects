# == Schema Information
#
# Table name: cats
#
#  id          :integer          not null, primary key
#  birth_date  :date             not null
#  color       :string           not null
#  name        :string           not null
#  sex         :string(1)        not null
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Cat < ApplicationRecord
  validates :birth_date, :color, :name, :sex, presence: true
  validates :sex, inclusion: { in: ['M', 'F'] }

  COLORS = ["grey", "brown", "yellow", "white", "black", "orange"]

  def self.colors
    COLORS
  end

  has_many :rental_requests,
    foreign_key: :cat_id,
    primary_key: :id,
    class_name: :CatRentalRequest,
    dependent: :destroy
end
