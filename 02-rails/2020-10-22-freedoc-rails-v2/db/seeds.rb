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
Patient.destroy_all
Appointment.destroy_all
Specialty.destroy_all
City.destroy_all

  %w[allergologie anesthésiologie andrologie cardiologie chirurgie dermatologie endocrinologie gastro-entérologie gériatrie gynécologie hématologie hépatologie générale préventive néonatologie néphrologie neurologie oncologie obstétrique ophtalmologie pédiatrie pneumologie psychiatrie radiologie radiothérapie].each do |spe|
    Specialty.create!(
      name: spe
    )
  end

250.times do 
  City.create!(
  name: Faker::Address.city
  )
end

500.times do 
  Doctor.create!(  
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    city_id: City.all.sample.id,
    zip_code: Faker::Address.postcode
  )
end

10000.times do 
  Patient.create!(
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    city_id: City.all.sample.id
  )
end

850.times do
  Appointment.create!(
    doctor: Doctor.all.sample.id, 
    patient: Patient.all.sample.id, 
    city_id: City.all.sample.id,
    date: Faker::Time.between_dates(from: Date.today, to: Date.today + 200, period: :day)
  )
  end  

Doctor.all.each do |doc|
  LinkSpecialty.create!(
    doctor_id: doc.id,
    specialty_id: Specialty.all.sample.id
  )
end