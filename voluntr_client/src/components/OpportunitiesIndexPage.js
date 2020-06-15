import React from "react";
import { Link } from "react-router-dom";

import ControlPanel from "./ControlPanel";
import { Opportunities } from "../requests";
import Spinner from "./Spinner";

export class OpportunitiesIndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    
      opportunities: [],
      isLoading: true
    };
  }

  componentDidMount() {
    Opportunities.all().then(opportunities => {
      this.setState({
        opportunities: opportunities,
        isLoading: false
      });
    }); 
  }

  deleteOpportunity(id) {
    Opportunities.destroy(id).then(() => {
      this.setState({
        opportunities: this.state.opportunities.filter(q => q.id !== id)
      });
    });
  }

  render() {
    if (this.state.isLoading) {
      return <Spinner />;
    }
    const { showAll = false } = this.props;
    const filteredOpportunities = this.state.opportunities.filter((q, index) => {
      if (showAll || index < 50) {
        return true;
      }
      return false;
    });
    return (
      <main className="OpportunitiesIndexPage">
        <h2>Opportunities</h2>
        <div
          className="ui list"
          style={{
            listStyle: "none",
            paddingLeft: 0
          }}
        >
          {filteredOpportunities.map(opportunities => (
            <li className="ui segment" key={opportunities.id}>
              <Link to={`/opportunities/${opportunities.id}`} className="item" href="">
                {opportunities.title}
              </Link>
            </li>
          ))}
        </div>
      </main>
    );
  }
}