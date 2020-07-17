class OpportunityMailer < ApplicationMailer
    def hello_world
        mail(
            to: "helgakern@gmail.com",
            from: "voluntr@voluntr.ca",
            subject: "You have a volunteer at Voluntr"
        )
    end

    def notify_opportunity_owner(message)
        @message = message
        @opportunity = message.opportunity
        @opportunity_owner = @opportunity.user
        @url = `http://localhost:8080/opportunities/${@opportunity.id}`
        mail(
            to: @opportunity_owner.email,
            subject: "#{message.user.first_name} sent you a message about your opportunity!"
        )
    end
end
