class ChangeTimeAndDateInOpportunities < ActiveRecord::Migration[6.0]
  def change
    change_column :opportunities, :time, :datetime
    change_column :opportunities, :date, :date 
  end
end
