class RemoveOpportunitiesIdFromMessages < ActiveRecord::Migration[6.0]
  def change
    remove_reference :messages, :opportunities, null: false, foreign_key: true
    add_reference :messages, :user, null: false, foreign_key: true
  end
end
