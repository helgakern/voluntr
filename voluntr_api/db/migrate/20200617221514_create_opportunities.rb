class CreateOpportunities < ActiveRecord::Migration[6.0]
  def change
    create_table :opportunities do |t|
      t.string :title
      t.text :description
      t.datetime :date
      t.datetime :time
      t.text :contact
      t.string :tags

      t.timestamps
    end
  end
end
