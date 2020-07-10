class AddAddressColumnToOpportunity < ActiveRecord::Migration[6.0]
  def change
    add_column :opportunities, :address, :string
  end
end
