import './Location_Sub.css';
import data from 'data.json';
import Map_sub from './Map_Sub.tsx';
import MapButtons_Sub from './MapButtons_Sub';
import { Caption } from '@/components/Text.tsx';
import 'aos/dist/aos.css';
import AOS from 'aos';

// AOS 초기화
AOS.init({
  duration: 1500, // 애니메이션 지속 시간
  offset: 100,    // 애니메이션 시작 위치
  easing: 'ease-in-out', // 부드러운 애니메이션
  once: true,     // 한 번만 실행
});

const Location_Sub = () => {
  const { mapInfo_sub } = data;

  const handleCopy = () => {
    navigator.clipboard.writeText(mapInfo_sub.address2)
      .then(() => {
        alert('주소가 복사되었습니다. 😊');
      })
      .catch((error) => {
        alert('주소 복사에 실패했습니다. 🥲');
        console.error('복사 실패:', error);
      });
  };

  

  return (
    <div className="location_sub-container" data-aos="fade-up" data-aos-delay="0">
      <Caption textAlign={'center'} data-aos="fade-up" data-aos-delay="100">
        {mapInfo_sub.address2}
        {mapInfo_sub.time}
      </Caption>
      <div className="button-group" data-aos="fade-up" data-aos-delay="200">
        <button 
          className="copy-button" 
          onClick={handleCopy} 
        >
          주소 복사
        </button>
        
      </div>
      <br /> {/* 헤딩과 내용 사이에 공백 추가 */}
      <Map_sub data-aos="fade-up" data-aos-delay="300" />
      <br /> {/* 헤딩과 내용 사이에 공백 추가 */}
      <MapButtons_Sub data-aos="fade-up" data-aos-delay="500" />
    </div>
  );
};

export default Location_Sub;
