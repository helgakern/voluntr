import React from "react";
import { Link } from "react-router-dom";
import CreatedAtShow from "./CreatedAtShow"
import ControlPanel from "./ControlPanel";
import { Opportunities } from "../requests";
import Spinner from "./Spinner";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import * as ELG from "esri-leaflet-geocoder";


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
      return <Spinner / > ;
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
        <container >
          <div style = {{ width: "59vw", height: "22vw", }}> 
          {}    
            <br /> 
            <Map className = "opportunities-map" style = {{ height: '400px' }} center = {[this.state.opportunities[0].latitude, this.state.opportunities[0].longitude]} zoom = {11}>
              <TileLayer attribution = '&copy; <a href="http://orm.org/copyright">OpenStreetMap</a> contributors' url = "https://{s}.tile.osm.org/{z}/{x}/{y}.png" />
            { this.state.opportunities.map(opportunity => ( 
                <Marker position = {[opportunity.latitude, opportunity.longitude]} >
                  <Popup > {opportunity.address, opportunity.title} < /Popup>      
                </Marker>
            ))
            } {} 
            </Map> 
          </div> 
        </container> 
        <container>  
          <br />
          <div className = "ui list" style = {{listStyle: "none", paddingLeft: 0}}> 
          {filteredOpportunities.map(opportunities => ( 
            <li className = "ui segment" key = { opportunities.id } >
              <Link to = {`/opportunities/${opportunities.id}`} className = "item" href = "" > 
              { opportunities.title } 
              </Link> 
            </li>
            ))
          } 
          </div> 
        </container>  
    </main>
    );
  }
}
