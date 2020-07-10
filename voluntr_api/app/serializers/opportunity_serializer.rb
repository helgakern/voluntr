class OpportunitySerializer < ActiveModel::Serializer
    attributes(
      :id,
      :title,
      :description,
      :date,
      :time,
      :address,
      :contact,
      :longitude,
      :latitude
      )
      
      belongs_to :user, key: :author
  
    end