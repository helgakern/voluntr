class Api::V1::OpportunitiesController < Api::ApplicationController

    before_action :authenticate_user!, except: [:index, :show]
    before_action :find_opportunities, only: [:show, :edit, :update, :destroy]
    before_action :authorize!, only: [:edit, :update, :destroy]
  
  
    # rescue_from(ActiveRecord:: RecordNotFound, with: :record_not_found)
    # rescue_from(ActiveRecord:: RecordInvalid, with: :record_invalid)
  
    def new
      @opportunities = Opportunity.new
    end

    def index
      opportunities = Opportunity.all.order(created_at: :desc)
      render(json: opportunities, each_serializer: OpportunityCollectionSerializer)
    end
  
    def show
      if @opportunities
      render(
        json: @opportunities,
     
        include: [ :owner, {messages: [ :owner ]} ]
      )
      else
        render(json: {error: 'Opportunity Not found'})
      end
    end
  
    def create
      opportunity = Opportunity.new opportunity_params
      opportunity.user = current_user
      opportunity.save!
      # redirect_to '/opportunities'
      render(json: opportunities, each_serializer: OpportunityCollectionSerializer)
      # if opportunity.save
      # flash[:notice] = "Opportunity created successfully"
      # redirect_to opportunity_path(opportunity)
      # else
      #   render(json: {error: 'Opportunity Not found'})
      # end  
    end
  
    def edit 
      unless can?(:crud, @opportunity)
        redirect_to root_path, alert: 'Not authorized'
      end
    end
  
    def update
      byebug
      if @opportunity.update opportunity_params
        render json: { id: @opportunity.id }
      else
        render(
          json: { errors: opportunity.errors },
          status: 422
        )
      end
    end
  
    def destroy
      # @opportunities = opportunities.find(params[:id])
      @opportunities.destroy
      render(json: { status: 200 }, status: 200)
    end
  
    private
  
    def find_opportunities
      @opportunities ||= Opportunity.find params[:id] 
    end
  
    def opportunity_params
      params.require(:opportunity).permit(:title, :description, :date, :time, :address, :contact, :category)
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

    def authorize!
      redirect_to root_path, alert: 'Not Authorized' unless can?(:crud, @opportunities)
    end
end