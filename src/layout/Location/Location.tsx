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
  width: 100%; /* 화면 너비를 가득 채움 */
  max-width: 1200px; /* 데스크톱 화면에서 최대 너비 제한 */
  margin: 0 auto; /* 가운데 정렬 */
  display: flex;
  flex-direction: column;
  align-items: center; /* 콘텐츠를 중앙 정렬 */
  justify-content: space-between; /* 상하 간격 균등 분배 */
  padding: 20px; /* 내부 여백 */
  box-sizing: border-box; /* 패딩 포함 계산 */
  background-color: #ffffff; /* 배경색 설정 */
  border-radius: 10px; /* 부드러운 모서리 */
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); /* 약간의 그림자 추가 */

  @media (max-width: 600px) {
    padding: 10px; /* 모바일 화면에서 패딩 줄이기 */
    max-width: 100%; /* 모바일에서 너비 제한 없이 화면 가득 채우기 */
  }
`;
