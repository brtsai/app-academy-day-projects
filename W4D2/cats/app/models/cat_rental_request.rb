# == Schema Information
#
# Table name: cat_rental_requests
#
#  id         :integer          not null, primary key
#  cat_id     :integer          not null
#  start_date :date             not null
#  end_date   :date             not null
#  status     :string           default("PENDING")
#

class CatRentalRequest < ApplicationRecord
  validates :cat_id, :start_date, :end_date, :status, presence: true
  validates :status, inclusion: { in: ['PENDING', 'APPROVED', 'DENIED'] }
  validate :does_not_overlap_approved_request

  belongs_to :cat,
    foreign_key: :cat_id,
    primary_key: :id,
    class_name: :Cat

  def overlapping_requests
    self.cat.rental_requests.where.not(id: id).where('cat_rental_requests.start_date BETWEEN ? AND ?', start_date, end_date)
    .or(self.cat.rental_requests.where.not(id: id).where('cat_rental_requests.end_date BETWEEN ? AND ?', start_date, end_date ))
    .or(self.cat.rental_requests.where.not(id: id).where('? BETWEEN cat_rental_requests.start_date AND cat_rental_requests.end_date', start_date))
    .or(self.cat.rental_requests.where.not(id: id).where('? BETWEEN cat_rental_requests.start_date AND cat_rental_requests.end_date', end_date))
  end

  def overlapping_approved_requests
    overlapping_requests.where(status: 'APPROVED')
  end

  def does_not_overlap_approved_request
    if overlapping_approved_requests.exists?
      errors.add(:overlapping_requests, "can't overlap with existing approved Cat Rental Requests for the same cat")
    end
  end
end
