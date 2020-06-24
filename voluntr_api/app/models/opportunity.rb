class Opportunity < ApplicationRecord
  
    belongs_to :user
    validates(:title, presence: true, uniqueness: true)
    validates :description, presence: { message: "must exist" }

    scope:viewable, -> {
        where(aasm_state: [:published])
    }

    include AASM 

    aasm whiny_transitions: false do
        state :draft, initial: true
        state :published

        event :published do
            transitions from: :draft, to: :published
        end
    end
  
end