import styled from '@emotion/styled';
import data from 'data.json';
import Button from '@/components/Button.tsx';

// 로고 이미지 경로
import NaverLogo from '@/assets/icons/naver_map.png'; // 네이버 로고 이미지
import KakaoLogo from '@/assets/icons/kakao_map.png'; // 카카오맵 로고 이미지

const MapButtons = () => {
  const { naverMap, kakaoMap } = data.mapInfo;

  return (
    <MapButtonWrapper>
      <Button onClick={() => window.open(naverMap)}>
        <Logo src={NaverLogo} alt="네이버 로고" />
        네이버 지도
      </Button>
      <Button onClick={() => window.open(kakaoMap)}>
        <Logo src={KakaoLogo} alt="카카오맵 로고" />
        카카오맵
      </Button>
    </MapButtonWrapper>
  );
};

export default MapButtons;

const MapButtonWrapper = styled.div`
  margin: 8px;
  display: flex;
  gap: 8px;
  justify-content: center;
`;

const Logo = styled.img`
  width: 20px; /* 로고 크기 */
  height: 20px;
  margin-right: 8px; /* 텍스트와 로고 간격 */
`;
