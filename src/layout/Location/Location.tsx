import './Location.css';
import data from 'data.json';
import Address from './Address.tsx';
import Map from './Map.tsx';
import MapButtons from './MapButtons.tsx';
import { Caption } from '@/components/Text.tsx';

const Location = () => {
  const { mapInfo } = data;

  return (
    <div className="location-container">
      <Caption textAlign={'center'}>{mapInfo.address2}</Caption>
      <div className="map-container">
        <Map />
      </div>
        
      <MapButtons />
        <div className="location-container">
        
        <Address />
      </div>
    </div>
  );
};

export default Location;
