import './Location.css';
import data from 'data.json';
import Address from './Address.tsx';
import Map from './Map.tsx';
import MapButtons from './MapButtons.tsx';

const Location = () => {
  const { mapInfo } = data;
  return (
    <div className="location-container">
      {/* 제목 */}
      <h1 className="location-title">{mapInfo.address1}</h1>

      {/* 캡션 */}
      <p className="location-caption">{mapInfo.address2}</p>

      {/* 지도 */}
      <div className="map-container">
        <Map />
      </div>

      {/* 버튼 */}
      <div className="map-buttons">
        <MapButtons />
      </div>
      <div className="location-additional">
      {/* 주소 */}
      <Address />
    </div>
    </div>
  );
};

export default Location;
