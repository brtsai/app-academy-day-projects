class RenameAlbumAlbumTypeColumn < ActiveRecord::Migration[5.1]
  def change
    rename_column :albums, :album_type, :live_album
  end
end
