import React from "react";
import { Link } from "react-router-dom";
import CreatedAtShow from "./CreatedAtShow"
import ControlPanel from "./ControlPanel";
import { Opportunities } from "../requests";
import Spinner from "./Spinner";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";


// function Map(){
//   return (
//             <GoogleMap
//             defaultZoom={10}
//             defaultCenter={{ lat: 49.282730, lng: -123.120735 }}
//             />  
//   )
// }

const WrappedMap = withScriptjs(withGoogleMap(Map));

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
    const position = [49.2557396,-123.0296706];
    const positionTwo = [49.2557396,-122.9383642];
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
          <Map className="opportunities-map" style={{height: '400px'}} center={position} zoom={15}>
          <TileLayer 
           attribution='&copy; <a href="http://orm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
            />
          <Marker position={position}>
          <Popup>
            Codecore College. <br /> New Westminster BC, V3M 6Z1
          </Popup>
          </Marker>
          <Marker position={positionTwo}>
          <Popup>
            Codecore College. <br /> New Westminster BC, V3M 6Z1
          </Popup>
          </Marker>
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
