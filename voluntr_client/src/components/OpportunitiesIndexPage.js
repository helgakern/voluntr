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



// const WrappedMap = withScriptjs(withGoogleMap(Map));

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
      // const results = await this.getCoordinates(opportunities)
      // console.log(results[0].coordinates)
      this.setState({
        opportunities: opportunities,
        isLoading: false
      });
     
  }

  async getCoordinates(array){
    
    const results = await array.map(async opportunity => {
      let coordinates = []      
      await ELG.geocode().text(opportunity.address).run(async function (err, results, response) {
        if (err) {
          console.log(err);
          return;
        }

        coordinates.push({lat: results.results[0].latlng.lat, lng: results.results[0].latlng.lng})
        
        opportunity.coordinates = [results.results[0].latlng.lat, results.results[0].latlng.lng]
        Opportunities.update(opportunity.id, opportunity)
        // this.setState({opportunities: [...this.setState.opportunities, opportunity]})

        // coordinates = await results
        // response(new Response(results))
        // console.log(coordinates)
        // // coordinates.push(results.results[0].latlng.lat)
        // // coordinates.push(results.results[0].latlng.lng)
        // return coordinates
      })
           console.log(coordinates[0])
        opportunity.coordinates = coordinates
      // console.log(opportunity.coordinates)
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

        <container>
        <div style={{ width: "59vw", height: "22vw", }}>
          {/* <WrappedMap
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
            loadingElement={<div style={{ height: "100%" }} />}
            containerElement={<div style={{ height: "400px" }} />}
            mapElement={<div style={{ height: "100%" }} />}
            /> */}
          <Map className="opportunities-map" style={{height: '400px'}} center={[49.2827, -123.1207]} zoom={11}>
          <TileLayer 
           attribution='&copy; <a href="http://orm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
            /> 
            {/* {this.state.opportunities.map((opportunity) => (
              <>
                  {console.log(opportunity.coordinates[0])}
              {opportunity.coordinates !== undefined ? (
                <Marker position={opportunity.coordinates}>
                <Popup>
                {opportunity.address} <br />
                </Popup>
                </Marker>
                ):(null)} */}
                {/* </> */}
            {/* ))} */}
          {/* <Marker position={positionTwo}>
          <Popup>
            Codecore College. <br /> New Westminster BC, V3M 6Z1
          </Popup>
          </Marker> */}
          </Map>
        </div>
        </container>
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
