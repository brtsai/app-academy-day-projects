class ModeratorMembership < ApplicationRecord

  belongs_to :user
  belongs_to :sub
  
end
