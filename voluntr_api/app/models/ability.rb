class Ability
    include CanCan::Ability
  
    def initialize(user)
        user ||= User.new # guest user (not logged in)
        if user.is_admin
          can :manage, :all
        else
          can :read, :all
        end
      
      alias_action :create, :read, :update, :destroy, to: :crud
  
      can(:crud, Opportunity) do |opportunity|
        opportunity.user == user
      end

      can :crud, Message do |message|
        message.user == user
    end
  end
end