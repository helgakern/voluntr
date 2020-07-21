import React from "react";
import { Link } from "react-router-dom";
import CreatedAtShow from "./CreatedAtShow"
import ControlPanel from "./ControlPanel";
import { Opportunities } from "../requests";
import { Spinner } from "./Spinner";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import * as ELG from "esri-leaflet-geocoder";
import { ClipLoader } from "react-spinners";
import { css } from "@emotion/core";
import moment from "moment";



const override = css`
position: fixed;
z-index: 999;
height: 2em;
width: 2em;
overflow: visible;
margin: auto;
top: 0;
left: 0;
bottom: 0;
right: 0;
`;


export class OpportunitiesIndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opportunities: [],
      isLoading: true
    };
  }

  async componentDidMount() {
    const opportunities = await Opportunities.all()
    console.log(opportunities)
    this.setState({
      opportunities: opportunities,
      isLoading: false
    });

  }

  async getCoordinates(array) {

    const results = await array.map(async opportunity => {
      let coordinates = []
      await ELG.geocode().text(opportunity.address).run(async function (err, results, response) {
        if (err) {
          console.log(err);
          return;
        }

        coordinates.push({
          lat: results.results[0].latlng.lat,
          lng: results.results[0].latlng.lng
        })

        opportunity.coordinates = [results.results[0].latlng.lat, results.results[0].latlng.lng]
        Opportunities.update(opportunity.id, opportunity)
      })
      console.log(coordinates[0])
      opportunity.coordinates = coordinates
      return opportunity

    })
    console.log(results[0].coordinates)
    return results
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
      return <ClipLoader css={override} size={150}/> ;
    } 
    const { showAll = false } = this.props;
    const filteredOpportunities = this.state.opportunities.filter((q, index) => {
      if (showAll || index < 50) {
        return true;
      }
      return false;
    });


    return ( 
      <main className = "OpportunitiesIndexPage" >
        
          <div style = {{ width: "100vw", height: "60vh" }}> 
              
            
            <Map className = "opportunities-map" style = {{ height: '60vh' }} center = {[this.state.opportunities[0].latitude, this.state.opportunities[0].longitude]} zoom = {11}>
              <TileLayer attribution = '&copy; <a href="http://orm.org/copyright">OpenStreetMap</a> contributors' url = "https://{s}.tile.osm.org/{z}/{x}/{y}.png" />
            { this.state.opportunities.map(opportunity => ( 
                <Marker position = {[opportunity.latitude, opportunity.longitude]} >
                  <Popup > {opportunity.title} </Popup>      
                </Marker>
            ))
            }
            </Map> 
          </div> 
        
        <div>  
          <div className = "opportunities-div" style = {{listStyle: "none", paddingLeft: 0}}>
          {filteredOpportunities.map(opportunities => ( 
            <ul className="opportunities-list">
            <li className = "opportunity-item" key = { opportunities.id } >
              <h4>
              <Link to = {`/opportunities/${opportunities.id}`} className = "item" href = "" >
              { opportunities.title } 
              </Link> 
              </h4>
              </li>
              <li className = "opportunity-" key = { opportunities.id } >
                <h4>
              <Link to = {`/opportunities/${opportunities.id}`} className = "item" href = "" >
              {moment(opportunities.date).format("DD/MM/YYYY")}
              {/* { opportunities.date }  */}
              </Link> 
              </h4> 
            </li>
            </ul>
            ))
          } 
          </div> 
        </div>
        
    </main>
    );
  }
}
