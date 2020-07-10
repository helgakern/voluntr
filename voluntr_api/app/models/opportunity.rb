class Opportunity < ApplicationRecord
    has_many(:messages, dependent: :destroy)
    belongs_to :user

    geocoded_by :address
    after_validation :geocode

    validates(:title, presence: true, uniqueness: true)
    validates :description, presence: { message: "must exist" }

    scope:viewable, -> {
        where(aasm_state: [:published])
    }

    include AASM 

    aasm whiny_transitions: false do
        state :draft, initial: true
        state :published

        event :publish do
            transitions from: :draft, to: :published
        end
    end
  
end