class CatRentalRequest < ApplicationRecord
  validates :cat_id, :start_date, :end_date, :status, presence: true
  validates :status, inclusion: { in: ['PENDING', 'APPROVED', 'DENIED'] }

  belongs_to :cat,
    foreign_key: :cat_id,
    primary_key: :id,
    class_name: :Cat
end
