class AddUserToMessages < ActiveRecord::Migration[6.0]
  def change
    add_reference :messages, :user, null: false, foreign_key: true
    remove_column :messages, :opportunities_id
  end
end
