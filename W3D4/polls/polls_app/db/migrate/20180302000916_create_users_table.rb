class CreateUsersTable < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :user, null: false, uniqueness: true

      t.timestamps
    end
  end
end
