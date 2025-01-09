import './Location.css';
import data from 'data.json';
import Address from './Address.tsx';
import Map from './Map.tsx';
import MapButtons from './MapButtons.tsx';
import { Caption } from '@/components/Text.tsx';
import 'aos/dist/aos.css';
import AOS from 'aos';
import location_map from '@/assets/location.png'; // 약도 이미지 경로

// AOS 초기화
AOS.init({
  duration: 1500, // 애니메이션 지속 시간
  offset: 100,    // 애니메이션 시작 위치
  easing: 'ease-in-out', // 부드러운 애니메이션
  once: true,     // 한 번만 실행
});

const Location = () => {
  const { mapInfo } = data;

  const handleCopy = () => {
    navigator.clipboard.writeText(mapInfo.address2)
      .then(() => {
        alert('주소가 복사되었습니다. 😊');
      })
      .catch((error) => {
        alert('주소 복사에 실패했습니다. 🥲');
        console.error('복사 실패:', error);
      });
  };

  const openPopup = () => {
    const popupWidth = 600; // 팝업 창 너비
    const popupHeight = 400; // 팝업 창 높이
    const left = (window.screen.width - popupWidth) / 2; // 화면 중앙 정렬
    const top = (window.screen.height - popupHeight) / 2; // 화면 중앙 정렬

    const popup = window.open(
      '',
      '약도 보기',
      `width=${popupWidth},height=${popupHeight},left=${left},top=${top},resizable=no,scrollbars=no`
    );

    if (popup) {
      popup.document.write(`
        <!DOCTYPE html>
        <html lang="ko">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>약도 보기</title>
            <style>
              body {
                margin: 0;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                background-color: #f4f4f4;
              }
              img {
                max-width: 100%;
                max-height: 100%;
              }
            </style>
          </head>
          <body>
            <img src="${location_map}" alt="약도" />
          </body>
        </html>
      `);
      popup.document.close();
    }
  };

  return (
    <div className="location-container" data-aos="fade-up" data-aos-delay="0">
      <Caption textAlign={'center'} data-aos="fade-up" data-aos-delay="100">
        {mapInfo.address2}
      </Caption>
      <div className="button-group" data-aos="fade-up" data-aos-delay="200">
        <button 
          className="copy-button" 
          onClick={handleCopy} 
        >
          주소 복사
        </button>
        <button 
          className="map-button" 
          onClick={openPopup} 
        >
          약도 보기
        </button>
      </div>
      <br /> {/* 헤딩과 내용 사이에 공백 추가 */}
      <Map data-aos="fade-up" data-aos-delay="300" />
      <br /> {/* 헤딩과 내용 사이에 공백 추가 */}
      <MapButtons data-aos="fade-up" data-aos-delay="500" />
      <Address data-aos="fade-up" data-aos-delay="700" />
    </div>
  );
};

export default Location;
