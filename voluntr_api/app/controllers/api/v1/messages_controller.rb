class Api::V1::MessagesController < ApplicationController
  
    before_action :authenticate_user!, except: [:index, :show]
    before_action :find_message, only: [ :destroy]
  
    skip_before_action :verify_authenticity_token  

    # rescue_from(ActiveRecord:: RecordNotFound, with: :record_not_found)
    # rescue_from(ActiveRecord:: RecordInvalid, with: :record_invalid)
  
    def index
      @opportunities = Opportunities.find(params[:opportunities_id])
      messages = Message.order(created_at: :desc)
      render(json: messages)
    end
  
    def show
      if @message
      render(
        json: @message)
      else
        render(json: {error: 'Message Not found'})
      end
    end
  
    def create
      opportunity = Opportunity.find(params[:opportunity_id])
      message = Message.new message_params
      message.opportunity = opportunity
      message.user = current_user
      message.save!
      OpportunityMailer.notify_opportunity_owner(message).deliver_now
      messages = Message.order(created_at: :asc)
      render(
        json: opportunity,
        include: [ :owner, {messages: [ :owner ]} ]
      )
    end
  
    def destroy
      @message.destroy
      render(json: { status: 200 }, status: 200)
    end
  
    private
  
    def find_message
      @message ||= Message.find params[:id]
    end
  
    def message_params
      params.require(:message).permit :body
    end
  
    def record_not_found
      render(
        json: { status: 422, errors: {msg: 'Record Not Found'}},
        status: 422
      )
    end
  
    def record_invalid(error) 
      invalid_record = error.record 
      errors = invalid_record.errors.map do |field, message|
      {
        type: error.class.to_s, 
        record_type: invalid_record.class.to_s,
        field: field,
        message: message
      }
      end
      render(
        json: { status: 422, errors: errors }
      )
    end
end
