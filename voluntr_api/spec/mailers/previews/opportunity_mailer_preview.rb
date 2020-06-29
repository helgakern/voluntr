# Preview all emails at http://localhost:3000/rails/mailers/opportunity_mailer
class OpportunityMailerPreview < ActionMailer::Preview
    def hello_world
        OpportunityMailer.hello_world
        
    end
end
