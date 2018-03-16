class AddUserPasswordField < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :password, :string, null: true
  end
end
