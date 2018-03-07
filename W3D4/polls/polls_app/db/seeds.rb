# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create!([{user: "John"}, {user: "Alice"}, {user: "Eric"}, {user: "Elisa"}])
Poll.create!([{author_id: 1, title: "john's poll"}, {author_id: 2, title: "alice's poll"}])
Question.create!([{question: 'q1', poll_id: 1}, {question: 'q1', poll_id: 2}, {question: 'q2', poll_id: 2}])
AnswerChoice.create!([{choice: 'poll1 q1 choice1', question_id: 1}, {choice: 'poll1 q1 choice2', question_id: 1}, {choice: 'poll2 q1 choice1', question_id: 2}, {choice: 'poll2 q1 choice2', question_id: 2}, {choice: 'pll2 q2 choice1', question_id: 3}, {choice: 'poll2 q2 choice2', question_id: 3}])
Response.create!([{user_id: 3, answer_choice_id: 1}, {user_id: 2, answer_choice_id: 1}, {user_id: 3, answer_choice_id: 1}, {user_id: 1, answer_choice_id: 4}, {user_id: 3, answer_choice_id: 4}, {user_id: 4, answer_choice_id: 1}, {user_id: 4, answer_choice_id: 5}])
