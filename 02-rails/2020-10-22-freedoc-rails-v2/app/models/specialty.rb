class Specialty < ApplicationRecord
    has_many :table_doctor_specialties
    has_many :doctors, through: :table_doctor_specialties
    has_many :appointments
end
