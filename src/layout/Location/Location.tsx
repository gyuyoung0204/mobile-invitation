import styled from '@emotion/styled';
import data from 'data.json';
import Address from './Address.tsx';
import Map from './Map.tsx';
import MapButtons from './MapButtons.tsx';
import { Caption, PointTitle } from '@/components/Text.tsx';

const Location = () => {
  const { mapInfo } = data;
  return (
    <LocationWrapper>
      <PointTitle>{mapInfo.address1}</PointTitle>
      <Caption textAlign={'center'}>{mapInfo.address2}</Caption>
      <MapContainer>
        <Map />
      </MapContainer>
      <MapButtons />
      <Address />
    </LocationWrapper>
  );
};

export default Location;

const LocationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between; /* 콘텐츠 사이 간격 분배 */
  padding: 20px;
  background-color: #ffffff;
  width: 100vw; /* 화면 너비 가득 */
  height: 100vh; /* 화면 높이 가득 */
  box-sizing: border-box; /* 패딩 포함 */
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 600px) {
    padding: 10px; /* 모바일에서 패딩 줄이기 */
  }
`;

const MapContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%; /* 맵이 너비를 가득 채움 */
  max-width: 600px; /* 최대 너비 제한 */
  flex-grow: 1; /* 남는 공간을 채워 맵 높이 조정 */

  @media (max-width: 600px) {
    max-width: 100%; /* 모바일에서는 너비 제한 없이 화면에 꽉 차게 */
  }
`;

const PointTitle = styled(PointTitle)`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #333;

  @media (max-width: 600px) {
    font-size: 18px; /* 모바일에서 폰트 크기 조정 */
  }
`;

const Caption = styled(Caption)`
  font-size: 16px;
  color: #777;

  @media (max-width: 600px) {
    font-size: 14px; /* 모바일에서 폰트 크기 줄이기 */
  }
`;
