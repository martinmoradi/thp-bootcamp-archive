class CreateTableDoctorSpecialties < ActiveRecord::Migration[5.2]
  def change
    create_table :table_doctor_specialties do |t|
      t.belongs_to :specialty, index: true
      t.belongs_to :doctor, index: true
      
      t.timestamps
    end
  end
end
