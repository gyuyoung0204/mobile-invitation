import './Location.css';
import data from 'data.json';
import Address from './Address.tsx';
import Map from './Map.tsx';
import MapButtons from './MapButtons.tsx';
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

const Location = () => {
  const { mapInfo } = data;

  return (
    <div className="location-container" data-aos="fade-up" data-aos-delay="0">
      <Caption textAlign={'center'} data-aos="fade-up" data-aos-delay="100">
        {mapInfo.address2}
      </Caption>
      <Map data-aos="fade-up" data-aos-delay="300" />
      <MapButtons data-aos="fade-up" data-aos-delay="500" />
      <Address data-aos="fade-up" data-aos-delay="700" />
    </div>
  );
};

export default Location;
