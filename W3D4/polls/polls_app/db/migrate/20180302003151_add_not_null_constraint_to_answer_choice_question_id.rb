class AddNotNullConstraintToAnswerChoiceQuestionId < ActiveRecord::Migration[5.1]
  def change
      change_column :answer_choices, :question_id, :integer, null: false
  end
end
