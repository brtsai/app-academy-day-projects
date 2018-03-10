class AddQuestionIdToAnswerChoice < ActiveRecord::Migration[5.1]
  def change
    add_column :answer_choices, :question_id, :integer
  end
end
