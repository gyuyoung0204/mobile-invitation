import './Location.css'; // Location.css 파일을 임포트
import data from 'data.json';
import Address from './Address.tsx';
import Map from './Map.tsx';
import MapButtons from './MapButtons.tsx';

const Location = () => {
  const { mapInfo } = data;
  return (
    <div className="location-container">
      <h1 className="location-title">{mapInfo.address1}</h1>
      <p className="location-caption">{mapInfo.address2}</p>
      <div className="map-container">
        <Map />
      </div>
      <MapButtons />
      <Address />
    </div>
  );
};

export default Location;
