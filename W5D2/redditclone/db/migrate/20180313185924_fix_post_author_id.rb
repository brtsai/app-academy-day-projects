class FixPostAuthorId < ActiveRecord::Migration[5.1]
  def change
    rename_column :posts, :authod_id, :author_id
  end
end
