import React, { Component } from "react";
import OpportunityPage from "./OpportunityPage";
import { Opportunities } from "../requests";
import Spinner from "./Spinner";

class ControlPanel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            opportunities: null,
            isLoading: true,
            errors: []
        };
    }

    componentDidMount(){
        Opportunities.one(this.props.match.params.id).then(opportunities => {
            this.setState({
                opportunities: opportunities,
                isLoading: false
            });
        });
    }

    deleteOpportunity(){
        this.setState({
            opportunities: null
        });
    }

    render (){
        if (this.state.isLoading){
            return <Spinner />
        }

        const currentUser = this.props.currentUser;
        
    }
}

export default ControlPanel;

