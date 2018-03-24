# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

cat1 = Cat.create(birth_date: Faker::Date.birthday(1, 20),
  color: Faker::Color.color_name, name: Faker::Name.first_name,
  sex: 'M', description: Faker::HitchhikersGuideToTheGalaxy.quote)
cat2 = Cat.create(birth_date: Faker::Date.birthday(1, 20),
  color: Faker::Color.color_name, name: Faker::Name.first_name,
  sex: 'F', description: Faker::HitchhikersGuideToTheGalaxy.quote)
cat3 = Cat.create(birth_date: Faker::Date.birthday(1, 20),
  color: Faker::Color.color_name, name: Faker::Name.first_name,
  sex: 'M', description: Faker::HitchhikersGuideToTheGalaxy.quote)
cat4 = Cat.create(birth_date: Faker::Date.birthday(1, 20),
  color: Faker::Color.color_name, name: Faker::Name.first_name,
  sex: 'F', description: Faker::HitchhikersGuideToTheGalaxy.quote)
cat5 = Cat.create(birth_date: Faker::Date.birthday(1, 20),
  color: Faker::Color.color_name, name: Faker::Name.first_name,
  sex: 'M', description: Faker::HitchhikersGuideToTheGalaxy.quote)
cat6 = Cat.create(birth_date: Faker::Date.birthday(1, 20),
  color: Faker::Color.color_name, name: Faker::Name.first_name,
  sex: 'F', description: Faker::HitchhikersGuideToTheGalaxy.quote)
cat7 = Cat.create(birth_date: Faker::Date.birthday(1, 20),
  color: Faker::Color.color_name, name: Faker::Name.first_name,
  sex: 'M', description: Faker::HitchhikersGuideToTheGalaxy.quote)
