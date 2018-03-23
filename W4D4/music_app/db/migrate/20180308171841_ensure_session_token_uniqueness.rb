class EnsureSessionTokenUniqueness < ActiveRecord::Migration[5.1]
  def change
    remove_index :users, name: :index_users_on_session_token
    add_index :users, :session_token, unique: true
  end
end
