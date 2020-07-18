class ChangeTimeAndDateInOpportunities < ActiveRecord::Migration[6.0]
  def change
    change_column :opportunities, :time, :time
    change_column :opportunities, :date, :date 
  end
end
