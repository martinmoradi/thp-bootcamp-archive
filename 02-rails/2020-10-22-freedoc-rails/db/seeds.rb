# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'
Faker::Config.locale = 'fr'

Doctor.destroy_all
200.times do 
  Doctor.create!(  
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    specialty: %w[allergologie anesthésiologie andrologie cardiologie chirurgie dermatologie endocrinologie gastro-entérologie gériatrie gynécologie hématologie hépatologie générale préventive néonatologie néphrologie neurologie oncologie obstétrique ophtalmologie pédiatrie pneumologie psychiatrie radiologie radiothérapie].sample,
    zip_code: Faker::Address.postcode
  )
end


Patient.destroy_all
5000.times do 
  Patient.create!(
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name
)
end

Appointment.destroy_all
60.times do
  Appointment.create!(
    doctor: Doctor.all.sample, 
    patient: Patient.all.sample, 
    date: Faker::Time.between_dates(from: Date.today, to: Date.today + 200, period: :day))
end
