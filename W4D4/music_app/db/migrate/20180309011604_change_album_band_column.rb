class ChangeAlbumBandColumn < ActiveRecord::Migration[5.1]
  def change
    rename_column :albums, :band, :band_id
  end
end
