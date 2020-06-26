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
    }

    createMessage = (id, params) => {
        Message.create(id, params).then(message => {
            if (message.errors) {
                this.setState({ errors: message.errors });
            }
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
        Opportunities.destroy(id).then(() => {
          this.setState({ opportunities: null });
          this.props.history.push("/opportunities");
        });
      }

      editOpportunity(id){
        
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
          
          return (
            <main>
            <OpportunityDetails {...this.state.opportunities} editOpportunity={this.editOpportunity} deleteOpportunity={this.deleteOpportunity}/>
    
            <h2>Previous Messages {userIsOwner()}</h2>
    
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