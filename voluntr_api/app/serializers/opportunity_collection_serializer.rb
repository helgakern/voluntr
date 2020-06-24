class OpportunityCollectionSerializer < ActiveModel::Serializer
    attributes(
      :id,
      :title,
      :description,
      :date,
      :time,
      :where,
      :contact
      )
       belongs_to :user, key: :author
  end