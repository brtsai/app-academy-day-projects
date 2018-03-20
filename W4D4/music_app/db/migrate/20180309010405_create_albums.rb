class CreateAlbums < ActiveRecord::Migration[5.1]
  def change
    create_table :albums do |t|
      t.string :title, null: false
      t.integer :year, null: false
      t.integer :band, null: false
      t.boolean :album_type, null: false, default: true
    end
    add_index :albums, :band
  end
end
