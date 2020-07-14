import React, { Component } from "react";

import { Opportunities } from "../requests";
import NewOpportunityForm from "./NewOpportunityForm";

export default class ControlPanel extends Component {
  state = {
    errors: []
  };
  createOpportunity = params => {
    Opportunities.create(params).then(opportunities => {
      if (opportunities.errors) {
        this.setState({ errors: opportunities.errors });
      } else {
        this.props.history.push(`/opportunities`);
      }
    });
  };

  render() {
    return (
      <main>
        <div className="header">
          <h2>Create an Opportunity</h2>
        </div>
        <NewOpportunityForm
          key={this.state.id}
          onSubmit={this.createOpportunity}
          errors={this.state.errors}
        />
      </main>
    );
  }
}

