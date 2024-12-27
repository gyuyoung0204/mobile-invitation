
import './Location.css';
import data from 'data.json';
import Address from './Address.tsx';
import Map from './Map.tsx';
import MapButtons from './MapButtons.tsx';

const Location = () => {
  const { mapInfo } = data;
  return (  
    <div className="location-container">
      <p className="location-caption">{mapInfo.address2}</p>
      <div className="map-container">
        <Map /> 
      </div> 
      <div className="map-buttons">
        <MapButtons />
      </div>
      <div className="location-address">
        <Address />
      </div>
    </div>
  );
};

export default Location;
