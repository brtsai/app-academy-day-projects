class CreateModeratorMemberships < ActiveRecord::Migration[5.1]
  def change
    create_table :moderator_memberships do |t|
      t.integer :user_id
      t.integer :sub_id

      t.timestamps
    end
    add_index :moderator_memberships, :user_id
    add_index :moderator_memberships, :sub_id
  end
end
