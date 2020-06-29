class Message < ApplicationRecord
    belongs_to :opportunities
    belongs_to :user
    validates :message, presence: true
  end