class Api::V1::PublishingsController < ApplicationController
    def create
        a = Opportunity.find params[:opportunities_id]
        a.publish!
        render json: { id: opportunities.id }
    end
end
