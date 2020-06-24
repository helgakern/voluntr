class AddUserReferenceToOpportunities < ActiveRecord::Migration[6.0]
  def change
    add_reference :opportunities, :user, null: true, foreign_key: true
    add_column :opportunities, :aasm_state, :string
  end
end
