class AddAdminToEvent < ActiveRecord::Migration[6.0]
  def change
    add_reference :events, :event_admin, index: true
  end
end
