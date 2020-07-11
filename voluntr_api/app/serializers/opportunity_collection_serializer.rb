class OpportunityCollectionSerializer < ActiveModel::Serializer
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
       belongs_to :user, key: :owner
  end