class Message < ApplicationRecord
    belongs_to :opportunity
    belongs_to :user
    validates :body, presence: true
  end