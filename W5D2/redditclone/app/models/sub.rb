class Sub < ApplicationRecord
  validates :title, :description, presence: true

  has_many :post_subs

  has_many :posts,
    through: :post_subs,
    source: :post

  has_many :moderator_memberships

  has_many :moderators,
    through: :moderator_memberships,
    source: :user

end
