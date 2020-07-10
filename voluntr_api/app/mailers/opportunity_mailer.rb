class OpportunityMailer < ApplicationMailer
    def hello_world
        mail(
            to: "helgakern@gmail.com",
            from: "voluntr@voluntr.ca",
            subject: "You have a volunteer at Voluntr"
        )
    end

    def notify_opportunity_owner(answer)
        @answer = answer
        @opportunity = answer.opportunity
        @opportunity_owner = opportunity.user
        
        mail(
            to: @opportunity_owner.email
            subject: "#{answer.user.first_name} answered your opportunity!"
        )
    end
end
