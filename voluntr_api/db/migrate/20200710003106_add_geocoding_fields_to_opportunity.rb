class AddGeocodingFieldsToOpportunity < ActiveRecord::Migration[6.0]
  def change
    add_column :opportunities, :latitude, :float
    add_column :opportunities, :longitude, :float
  end
end

