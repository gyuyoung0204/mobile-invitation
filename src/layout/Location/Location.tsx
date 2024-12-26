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
      <Map />
      <MapButtons />
      <Address />
    </LocationWrapper>
  ); 
};

export default Location;

const LocationWrapper = styled.div`
  width: 100%; /* 모바일 화면에서 가득 채우기 */
  max-width: 1200px; /* 데스크톱 화면에서 최대 너비 제한 */
  margin: 0 auto; /* 가운데 정렬 */
  display: flex;
  flex-direction: column;
  padding: 20px; /* 내부 여백 추가 */

  @media (max-width: 600px) {
    padding: 10px; /* 모바일 화면에서 패딩 줄이기 */
  }
`;
