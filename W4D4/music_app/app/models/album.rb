class Album < ApplicationRecord
  validates :title, :year, :band, presence: true
  validates :live_album, nil: false
  validates :live_album, inclusion: {in: [true, false]}

  belongs_to :band,
    primary_key: :id,
    foreign_key: :band_id,
    class_name: :Band
end
