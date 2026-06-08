class AddStripeCustomerIdToAttendances < ActiveRecord::Migration[6.0]
  def change
    add_column :attendances, :stripe_customer_id, :string
  end
end
