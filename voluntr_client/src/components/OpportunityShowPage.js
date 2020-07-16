import React, { Component } from "react";
import OpportunityDetails from "./OpportunityDetails";
import { Opportunities, Message, Publish } from "../requests";
import { MessageList } from "./MessageList";
import Spinner from "./Spinner";
import NewMessageForm from "./NewMessageForm";
import PublishForm from "./PublishForm";
import { Button } from "semantic-ui-react";

class OpportunityShowPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            opportunities: null,
            isLoading: true,
            errors: []
        };
        this.deleteOpportunity = this.deleteOpportunity.bind(this)
        this.editOpportunity = this.editOpportunity.bind(this)

    }

    createMessage = (id, params) => {
        Message.create(id, params).then(message => {
            if (message.errors) {
                this.setState({ errors: message.errors });
            }
            // this.opportunities.messages = message
            const updatedOpportunities = this.state.opportunities
            updatedOpportunities.messages = message
            this.setState({
              opportunities: message
            })
            console.log(message)
        });
    };

    createPublish = (id, params) => {
        Publish.create(id, params).then(message => {
          if (message.errors) {
            this.setState({ errors: message.errors });
          }
        });
      };

      componentDidMount() {
        Opportunities.one(this.props.match.params.id).then(opportunities => {
          this.setState({
            opportunities: opportunities,
            isLoading: false
          });
        });
      }
    
      deleteOpportunity(id) {
        if(window.confirm("Are you sure you want to delete?")){
          Opportunities.destroy(id)
          .then(() => {
            this.props.history.push("/opportunities");
          })
          }
        }

      editOpportunity(id){
        this.props.history.push(`/opportunities/${id}/edit`)
      }

      deleteMessage(id){
          this.setState({
              opportunities: {
                  ...this.state.opportunities,
                  messages: this.state.opportunities.messages.filter(a => a.id !== id)
              }
          });
      }

      render() {
          if (this.state.isLoading){
              return <Spinner />;
          }

          const currentUser = this.props.currentUser;
          const { messages = [] } = this.state.opportunities;

          const userIsOwner = () => {
              if(currentUser == this.state.opportunities.owner){
                  return (
                      <PublishForm
                      opportunities={this.state.opportunities}
                      onSubmit={this.createPublish}
                      errors={this.state.errors}
                      />
                  );
              }
          };
          console.log(this.state.opportunities)
          return (
            <main className="main">
            {/* <OpportunityDetails {...this.state.opportunities} editOpportunity={this.editOpportunity} deleteOpportunity={this.deleteOpportunity}/> */}
            <OpportunityDetails {...this.state.opportunities} deleteOpportunity={this.deleteOpportunity} editOpportunity={this.editOpportunity}/>
            <h2 className="messages-title">Messages {userIsOwner()}</h2>
    
            {currentUser ? (
              <>
                <NewMessageForm
                  opportunities={this.state.opportunities}
                  onSubmit={this.createMessage}
                  errors={this.state.errors}
                />
              </>
            ) : (
              <React.Fragment></React.Fragment>
            )}
    
            <MessageList messages={messages} onMessageDeleteClick={id => this.deleteMessage(id)} />
          </main>
        );
      }
    }
    
    export default OpportunityShowPage;