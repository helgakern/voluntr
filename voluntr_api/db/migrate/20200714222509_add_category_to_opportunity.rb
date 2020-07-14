class AddCategoryToOpportunity < ActiveRecord::Migration[6.0]
  def change
    add_column :opportunities, :category, :string
  end
end
