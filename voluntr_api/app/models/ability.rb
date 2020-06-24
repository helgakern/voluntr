class Ability
    include CanCan::Ability
  
    def initialize(user)
        user ||= User.new # guest user (not logged in)
        if user.admin?
          can :manage, :all
        else
          can :read, :all
        end
      
      alias_action :create, :read, :update, :destroy, to: :crud
  
      can(:crud, Opportunity) do |opportunity|
        opportunity.user == user
      end
    end
  end