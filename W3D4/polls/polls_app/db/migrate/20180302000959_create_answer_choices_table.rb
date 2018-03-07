class CreateAnswerChoicesTable < ActiveRecord::Migration[5.1]
  def change
    create_table :answer_choices do |t|
      t.text :choice

      t.timestamps
    end
  end
end
