class AddIndexToCatRentalRequest < ActiveRecord::Migration[5.1]
  def change
      add_index :cat_rental_requests, :cat_id
      change_column :cat_rental_requests, :cat_id, :integer, null: false
      change_column :cat_rental_requests, :start_date, :date, null: false
      change_column :cat_rental_requests, :end_date, :date, null: false
  end
end
