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
      :latitude,
      # :message
      )
      
      belongs_to :user, key: :owner
      has_many :messages
      
      class MessageSerializer < ActiveModel::Serializer
        attributes :body, :id
        belongs_to(:user, key: :owner)
      end
    end

